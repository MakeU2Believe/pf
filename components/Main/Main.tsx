import React from 'react';

import s from './Main.module.scss';
import {Project, projects} from '../../data';
import {Layout} from '../Layout';
import {ScrollableContent} from '../ScrollableContent';
import {Header} from '../Header';
import {Footer} from '../Footer';
import {Label} from '../Label';
import {Link} from '../Link';

export interface MainProps {
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
    return (
      <>
        <Layout>
          <Header link={{href: '/resume', children: 'résumé'}}/>

          <div className={s.thumbnailContainer}>
            {this.state.activeProject && (
              <img src={this.state.activeProject.thumbnail} className={s.thumbnail}/>
            )}
          </div>

          <Label className={s.label}>work</Label>

          <Footer/>
        </Layout>

        <ScrollableContent>
          <ul className={s.projects}>
            {projects.map((project) => {
              const {slug, title, description} = project;

              return (
                <li className={s.project} key={title}
                    onMouseEnter={() => this.setActiveProject(project)}
                    onMouseLeave={() => this.setActiveProject(null)}>
                  <Link href={`/project/${slug}`} className={s.projectLabel}
                        active={this.state.activeProject === project}>{title}</Link>
                  <p className={s.projectDescription}>{description}</p>
                </li>
              )
            })}
          </ul>
        </ScrollableContent>
      </>
    );
  }
}
