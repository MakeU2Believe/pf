import React from 'react';

import s from './Main.module.scss';
import {Project, projects} from '../../data';
import classNames from 'classnames';
import Link from 'next/link';

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
        <main className={s.root}>
          <h2 className={classNames(s.heading, s.interactive)}>nick</h2>
          <h2 className={classNames(s.heading, s.interactive)}>deineko</h2>

          <Link href="/resume" className={classNames(s.button, s.interactive)}>
            résumé
          </Link>

          <h2 className={classNames(s.subtitle, s.interactive)}>art director, visual designer, tutor, car lover.</h2>

          <div className={s.thumbnailContainer}>
            {this.state.activeProject && (
              <img src={this.state.activeProject.thumbnail} className={s.thumbnail}/>
            )}
          </div>

          <div className={classNames(s.fonts, s.interactive)}>
            typefaces: rublena © ktf; mantonico © minttype
          </div>
          <div className={classNames(s.contacts, s.interactive)}>
            +38 063 348 35 48   |   mykola.a.deineko@gmail.com
          </div>
        </main>

        <ul className={s.projects}>
          {projects.map((project) => {
            const {title, description } = project;

            return (
              <li className={s.project} key={title}
                  onMouseEnter={() => this.setActiveProject(project)}
                  onMouseLeave={() => console.log('=')}>
                <button className={classNames(s.button, s.projectLabel)}>{title}</button>
                <p className={s.projectDescription}>{description}</p>
              </li>
            )
          })}
        </ul>
      </>
    );
  }
}
