import React from 'react';

import s from './Main.module.scss';
import type {Project} from '../../data';
import {Layout} from '../Layout';
import {ScrollableContent} from '../ScrollableContent';
import {Header} from '../Header';
import {Footer} from '../Footer';
import {Label} from '../Label';
import NextLink from 'next/link';
import {Heading} from '../Heading';
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

  render() {
    const {isActive, lastActiveProject} = this.state;
    const linkProps = {href: '/resume', children: 'résumé'};

    return (
      <>
        <Layout>
          <Header link={linkProps}/>

          <div className={classNames(s.projectDetails, {
            [s.active]: isActive
          })}>
            <Heading level="H3">{lastActiveProject?.title}</Heading>
            <p className={s.projectDescription}>{lastActiveProject?.type} <br/> {lastActiveProject?.year}</p>
          </div>

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
                  // onMouseLeave={() => this.unSetActiveProject()}
                >
                  <NextLink
                    href={`/project/${slug}`}
                    onFocus={() => this.setActiveProject(project)}
                    onBlur={() => this.unSetActiveProject()}
                  >
                    <img src={project.thumbnail} alt={project.title} className={s.thumbnail}/>
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
