import React from 'react';

import s from './Main.module.scss';
import type {Project} from '../../data';
import {Layout} from '../Layout';
import {ScrollableContent} from '../ScrollableContent';
import {Header} from '../Header';
import {Footer} from '../Footer';
import {Label} from '../Label';
import {Link} from '../Link';

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

    return (
      <>
        <Layout>
          <Header link={{href: '/resume', children: 'résumé'}}/>

          <div className={s.thumbnailContainer}>
            {activeProject && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={activeProject.thumbnail} alt={activeProject.title} className={s.thumbnail} />
            )}
          </div>

          <Label className={s.label}>work</Label>

          <Footer/>
        </Layout>

        <ScrollableContent>
          <Header />

          <ul className={s.projects}>
            {this.props.projects.map((project) => {
              const {slug, title, year, type} = project;

              return (
                <li className={s.project} key={title}
                    onMouseEnter={() => this.setActiveProject(project)}
                    onMouseLeave={() => this.setActiveProject(null)}>
                  <Link
                    href={`/project/${slug}`} className={s.projectLabel}
                    active={this.state.activeProject === project}
                    onFocus={() => this.setActiveProject(project)}
                    onBlur={() => this.setActiveProject(null)}
                  >
                    {title}
                  </Link>
                  <p className={s.projectDescription}>{type} <br /> {year}</p>
                </li>
              )
            })}
          </ul>
        </ScrollableContent>
      </>
    );
  }
}
