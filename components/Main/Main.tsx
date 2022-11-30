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

export interface MainProps {
  projects: Project[];
}

export interface MainState {
  activeProject: Project | null;
}

export class Main extends React.Component<MainProps, MainState> {
  state: MainState = {
    activeProject: null,
  }

  private setActiveProject(project: Project | null) {
    this.setState({activeProject: project});
  }

  render() {
    const {activeProject} = this.state;
    const linkProps = {href: '/resume', children: 'résumé'};

    return (
      <>
        <Layout>
          <Header link={linkProps}/>

          <div className={s.thumbnailContainer}>
            {activeProject && (
              <div className={s.projectDetails}>
                <Heading level="H3">{activeProject.title}</Heading>
                <p className={s.projectDescription}>{activeProject.type} <br/> {activeProject.year}</p>
              </div>
            )}
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
                  key={title}
                  onMouseEnter={() => this.setActiveProject(project)}
                  // onMouseLeave={() => this.setActiveProject(null)}
                >
                  <NextLink
                    href={`/project/${slug}`}
                    onFocus={() => this.setActiveProject(project)}
                    onBlur={() => this.setActiveProject(null)}
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
