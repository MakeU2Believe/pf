import React from 'react';
import { debounce } from 'throttle-debounce';

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
  lastActiveProject: Project | null;
  // TODO remove isActive?
  isActive: boolean;
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
    lastActiveProject: null,
    isActive: false,
  }

  private contentRef = React.createRef<HTMLDivElement>();
  private isMobile = () => window.matchMedia('(max-width: 767px)').matches;
  private isReadyToListenScroll = false;

  componentDidMount() {
    if (this.contentRef.current && !this.isMobile()) {
      this.contentRef.current.scrollTop = 700;

      setTimeout(() => {
        this.isReadyToListenScroll = true;
      }, 1000);
    }
  }

  private onContentScroll = debounce(200, () => {
    if (!this.contentRef.current || !this.isReadyToListenScroll) {
      return;
    }

    const centerLineY = window.innerHeight / 2;
    const marginPx = 6;

    const {slug, group}  = Array.from(this.contentRef.current.querySelectorAll<HTMLLIElement>('[data-slug]'))
      .find((thumbContainer) => {
        const {y, height} = thumbContainer.getBoundingClientRect();

        return centerLineY > (y - marginPx) && centerLineY < (y + height + marginPx);
      })
      ?.dataset || {};

    if (slug && group) {
      const closestProjectToCenter = this.props.projects
        .find(project => project.slug === slug) || null;

      const centralGroup = Number(group);
      const renderedProjects: RenderedProject[] = [];

      for (let i = centralGroup - 2; i < centralGroup + 2; i++) {
        renderedProjects.push(...projectsWithGroup(this.props.projects, i));
      }

      this.setState({
        lastActiveProject: closestProjectToCenter,
        isActive: true,
        renderedProjects,
      });
    }
  });

  private setActiveProject(project: Project) {
    this.setState({
      lastActiveProject: project,
      isActive: true,
    });
  }

  private renderProjectDetails({isActive, project}: {isActive: boolean, project: Project | null}) {
    return (
      <div className={classNames(s.projectDetails, {
        [s.active]: isActive
      })}>
        <h4 className={s.projectTitle}>{project?.title}</h4>
        <p className={s.projectDescription}>{project?.type} <br/> ( {project?.year} )</p>
      </div>
    )
  }

  render() {
    const {isActive, lastActiveProject} = this.state;
    const linkProps = {href: '/resume', text: 'résumé', mobileText: 'cv'};

    return (
      <>
        <Layout>
          <Header link={linkProps}/>

          {this.renderProjectDetails({
            isActive,
            project: lastActiveProject,
          })}

          <Label className={s.label}>work</Label>

          <Footer/>
        </Layout>

        <ScrollableContent rootRef={this.contentRef} onScroll={this.onContentScroll}>
          <Header link={linkProps} inContent={true}/>

          <Label className={classNames(s.label, s.mobile)}>work</Label>

          <ul className={s.projects}>
            {this.state.renderedProjects.map((project) => {
              const {slug, title, thumbnail, group} = project;

              return (
                <li
                  key={`${slug}-${group}`}
                  data-group={group}
                  data-slug={slug}
                  className={classNames(s.thumbContainer, {
                    [s.active]: lastActiveProject?.slug === slug,
                  })}
                  onMouseEnter={() => this.setActiveProject(project)}
                >
                  <NextLink href={`/project/${slug}`}>
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
