import React from 'react';
import {debounce, throttle} from 'throttle-debounce';

import s from './Main.module.scss';
import type {Project} from '../../data';
import {Layout} from '../Layout';
import {ScrollableContent} from '../ScrollableContent';
import {Header} from '../Header';
import {Footer} from '../Footer';
import {Label} from '../Label';
import NextLink from 'next/link';
import classNames from 'classnames';
import {getProjectContext} from '../setProjectContext';
import {mainInfo, projects} from '../../data';
import {isMobile} from '../isMobile';

export interface MainProps {
  projects: Project[];
}

type RenderedProject = Project & {
  group: number;
}

export interface MainState {
  isCarouselReady: boolean;
  renderedProjects: RenderedProject[];
  activeProject: string | null;
}

const projectsWithGroup = (projects: Project[], group: number) => {
  return projects.map((project) => ({
    ...project,
    group,
  }));
}

export class Main extends React.Component<MainProps, MainState> {
  state: MainState = {
    isCarouselReady: false,
    renderedProjects: projectsWithGroup(this.props.projects, 0),
    activeProject: null,
  }

  private contentRef = React.createRef<HTMLDivElement>();
  private projectListRef = React.createRef<HTMLUListElement>();
  private onContentScroll = () => {};

  componentDidMount() {
    const projectContext = getProjectContext();

    if (isMobile()) {
      setTimeout(() => {
        const element = document.querySelector<HTMLLIElement>(`[data-slug="${projectContext}"]`);

        if (element) {
          (element as any).scrollIntoViewIfNeeded
            ? (element as any).scrollIntoViewIfNeeded()
            : element.scrollIntoView(false);
        }

        document.addEventListener('scroll', throttle(100, () => {
          const centerLine = window.innerHeight / 2;

          const {slug} = this.getThumbElements().find((thumbContainer) => {
            const {y, height} = thumbContainer.getBoundingClientRect();

            return centerLine > y && centerLine < (y + height);
          })?.dataset || {};

          if (slug) {
            this.setState({
              activeProject: slug,
            })
          }
        }));

        this.setState({
          isCarouselReady: true,
          activeProject: projectContext,
        });
      }, 100);
    } else {
      const centeredProjectSlug = projectContext ?? projects[2].slug;
      const centeredGroup = 0;

      this.updateInfiniteGallery(centeredGroup);

      setTimeout(() => {
        const centerLineY = this.getLinesY()?.centerLine;

        if (this.contentRef.current && centerLineY) {
          let scrollTop = 700;

          const element = document.querySelector<HTMLLIElement>(`[data-slug="${centeredProjectSlug}"][data-group="${centeredGroup}"]`);

          if (element) {
            scrollTop = element.offsetTop - centerLineY + element.getBoundingClientRect().height / 2;
          }

          this.contentRef.current.scrollTop = scrollTop;
        }

        setTimeout(() => {
          this.onContentScroll = () => {
            this.updateInfiniteGalleryThrottled();
            this.updateActiveProject();
          }

          this.setState({
            isCarouselReady: true,
            activeProject: projectContext,
          });
        }, projectContext ? 0 : 700);
      })
    }
  }

  private updateInfiniteGallery = (forcedGroup?: number) => {
    const group = forcedGroup ?? Number(this.getActiveThumb().group);

    if (group !== undefined && isNaN(group)) {
      return;
    }

    const renderedProjects: RenderedProject[] = [];

    for (let i = group - 4; i <= group + 4; i++) {
      renderedProjects.push(...projectsWithGroup(this.props.projects, i));
    }

    this.setState({
      renderedProjects,
    });
  };

  private updateInfiniteGalleryThrottled = throttle(100, this.updateInfiniteGallery);

  private updateActiveProject = debounce(300, () => {
    if (this.projectListRef?.current?.matches(':hover')) {
      return;
    }

    const {slug} = this.getActiveThumb();

    if (slug) {
      this.setState({ activeProject: slug });
    }
  });

  getLinesY = () => {
    const bottomLine = window.innerHeight;

    const {y: subtitleY, height: headerHeight} = document
      .querySelector('#surname')
      ?.getBoundingClientRect() || {};

    const topLine = (subtitleY === undefined || headerHeight === undefined) ? 0 : subtitleY + headerHeight;

    return {
      topLine,
      centerLine: (topLine + bottomLine) / 2,
      bottomLine,
    }
  }

  private getActiveThumb = () => {
    const linesY = this.getLinesY();

    if (!this.contentRef.current || !linesY) {
      return {};
    }

    const { topLine, centerLine, bottomLine } = linesY;
    const marginPx = 3;

    const items = this.getThumbElements();
    const itemsBetweenContent = items
      .filter((thumbContainer) => {
        const {y, height} = thumbContainer.getBoundingClientRect();

        return y > topLine && bottomLine > (y + height);
      });

    if (itemsBetweenContent.length === 1) {
      return itemsBetweenContent[0]?.dataset || {};
    } else {
      return items.find((thumbContainer) => {
        const {y, height} = thumbContainer.getBoundingClientRect();

        return centerLine > (y - marginPx) && centerLine < (y + height + marginPx);
      })?.dataset || {}
    }
  }

  private getThumbElements = () => Array.from(document.querySelectorAll<HTMLLIElement>('[data-slug]'));

  private renderProjectDetails({isActive, project}: {isActive: boolean, project: Project}) {
    return (
      <div key={project.slug} className={classNames(s.projectDetails, {
        [s.active]: isActive
      })}>
        <h4 className={s.projectTitle}>
          <span className={s.animatedText}>{project.title}</span>
        </h4>

        <p className={s.projectDescription}>
          <span className={s.animatedText}>{project.type}</span>
        </p>

        <p className={s.projectDescription}>
          <span className={s.animatedText}>( {project?.year} )</span>
        </p>
      </div>
    )
  }

  render() {
    const {isCarouselReady, activeProject, renderedProjects} = this.state;

    return (
      <>
        <Layout>
          <Header />

          <h3 className={s.subtitle}>
            {mainInfo.subtitle.map((line, i) => (
              <span key={i}>{line}{mainInfo.subtitle.length - 1 === i ? '.' : ','}<br/></span>
            ))}
          </h3>

          <div className={s.projectDetailsContainer}>
            {
              this.props.projects.map((project) =>
                this.renderProjectDetails({
                  project,
                  isActive: project.slug === activeProject,
                }))
            }
          </div>

          <Footer/>
        </Layout>

        <ScrollableContent rootRef={this.contentRef} onScroll={this.onContentScroll}>
          <Header hideMobile={true} showInitials={true}/>

          <ul className={classNames(s.projects, {[s.ready]: isCarouselReady})} ref={this.projectListRef}>
            {renderedProjects.map((project) => {
              const {slug, title, thumbnail, group} = project;

              return (
                <li
                  key={`${slug}-${group}`}
                  data-group={group}
                  data-slug={slug}
                  className={classNames(s.thumbContainer, {
                    [s.active]: activeProject === slug,
                  })}
                  onMouseEnter={() => {
                    this.setState({
                      activeProject: slug,
                    });
                  }}
                >
                  <NextLink href={`/${slug}`} className={s.thumbLink}>
                    <img src={thumbnail} alt={title} className={s.thumbnail}/>

                    {this.renderProjectDetails({
                      isActive: true,
                      project,
                    })}
                  </NextLink>
                </li>
              )
            })}
          </ul>
        </ScrollableContent>
      </>
    );
  }
}
