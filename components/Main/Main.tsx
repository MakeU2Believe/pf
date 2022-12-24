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

export interface MainProps {
  projects: Project[];
}

type RenderedProject = Project & {
  group: number;
}

export interface MainState {
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
    renderedProjects: projectsWithGroup(this.props.projects, 0),
    activeProject: null,
  }

  private contentRef = React.createRef<HTMLDivElement>();
  private isMobile = () => window.matchMedia('(max-width: 767px)').matches;
  private isReadyToListenScroll = false;

  componentDidMount() {
    if (this.contentRef.current && !this.isMobile()) {
      this.contentRef.current.scrollTop = 700;

      setTimeout(() => {
        this.isReadyToListenScroll = true;
      }, 100);
    }
  }

  private onContentScroll = () => {
    if (this.isReadyToListenScroll) {
      this.updateInfiniteGallery();
      this.updateActiveProject();
    }
  }

  private updateInfiniteGallery = throttle(100, () => {
    const {slug, group} = this.getActiveThumb();

    if (slug && group) {
      const centralGroup = Number(group);
      const renderedProjects: RenderedProject[] = [];

      for (let i = centralGroup - 5; i <= centralGroup + 5; i++) {
        renderedProjects.push(...projectsWithGroup(this.props.projects, i));
      }

      this.setState({
        renderedProjects,
      });
    }
  });

  private updateActiveProject = debounce(300, () => {
    const {slug} = this.getActiveThumb();

    if (slug) {
      this.setState({ activeProject: slug });
    }
  });

  private getActiveThumb = () => {
    if (!this.contentRef.current) {
      return {};
    }

    const {y: subtitleY, height: subtitleHeight} = document
      .querySelector('#subtitle')
      ?.getBoundingClientRect() || {};

    const {y: copyrightY} = document
      .querySelector('#copyright')
      ?.getBoundingClientRect() || {};

    if (!subtitleY || !subtitleHeight || !copyrightY) {
      throw new Error('Cannot calculate middle');
    }

    const centerLineY = (copyrightY + subtitleHeight + subtitleHeight) / 2;
    const marginPx = 6;

    const items = Array.from(this.contentRef.current.querySelectorAll<HTMLLIElement>('[data-slug]'));
    const itemsBetweenContent = items
      .filter((thumbContainer) => {
        const {y, height} = thumbContainer.getBoundingClientRect();

        return y > copyrightY + subtitleHeight && copyrightY < (y + height);
      });

    if (itemsBetweenContent.length === 1) {
      return itemsBetweenContent[0]?.dataset || {};
    } else {
      return items.find((thumbContainer) => {
        const {y, height} = thumbContainer.getBoundingClientRect();

        return centerLineY > (y - marginPx) && centerLineY < (y + height + marginPx);
      })?.dataset || {}
    }
  }

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
    const {activeProject, renderedProjects} = this.state;
    const linkProps = {href: '/resume', text: '_résumé_', mobileText: 'cv'};

    return (
      <>
        <Layout>
          <Header link={linkProps}/>

          <div className={s.projectDetailsContainer}>
            {
              this.props.projects.map((project) =>
                this.renderProjectDetails({
                  project,
                  isActive: project.slug === activeProject,
                }))
            }
          </div>

          <Label className={s.label}>work</Label>

          <Footer/>
        </Layout>

        <ScrollableContent rootRef={this.contentRef} onScroll={this.onContentScroll}>
          <Header link={linkProps} inContent={true}/>

          <Label className={classNames(s.label, s.mobile)}>work</Label>

          <ul className={s.projects}>
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
                >
                  <NextLink href={`/${slug}`}>
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
