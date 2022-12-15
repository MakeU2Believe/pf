import React from 'react';

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

export interface MainState {
  lastActiveProject: Project | null;
  isActive: boolean;
}

export class Main extends React.Component<MainProps, MainState> {
  state: MainState = {
    lastActiveProject: null,
    isActive: false,
  }

  private setActiveProject(project: Project) {
    this.setState({
      lastActiveProject: project,
      isActive: true,
    });
  }

  private unSetActiveProject() {
    this.setState({
      isActive: false,
    });
  }

  private renderProjectDetails({isActive, project}: {isActive: boolean, project: Project | null}) {
    return (
      <div className={classNames(s.projectDetails, {
        [s.active]: isActive
      })}>
        <h4 className={s.projectTitle}>{project?.title}</h4>
        <p className={s.projectDescription}>{project?.type} <br/> ({project?.year})</p>
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

        <ScrollableContent>
          <Header link={linkProps} fake={true}/>

          <ul className={s.projects}>
            {this.props.projects.map((project) => {
              const {slug, title} = project;

              return (
                <li
                  className={s.thumbContainer}
                  key={title}
                  onMouseEnter={() => this.setActiveProject(project)}
                  onMouseLeave={() => this.unSetActiveProject()}
                >
                  <NextLink
                    href={`/project/${slug}`}
                    onFocus={() => this.setActiveProject(project)}
                    onBlur={() => this.unSetActiveProject()}
                  >
                    <img src={project.thumbnail} alt={project.title} className={s.thumbnail}/>

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
