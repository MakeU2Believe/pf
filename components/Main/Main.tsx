import React from 'react';

import s from './Main.module.scss';
import {projects} from '../../data';
import classNames from 'classnames';

export interface MainProps {
}

export class Main extends React.Component<MainProps> {
  render() {
    return (
      <main className={s.root}>
        <h2 className={s.heading}>nick</h2>
        <h2 className={s.heading}>deineko</h2>

        <button className={s.button}>résumé</button>
        <h2 className={s.subtitle}>art director, visual designer, tutor, car lover.</h2>

        <div className={s.thumbnail}></div>

        <ul className={s.projects}>
          {projects.map(({title, description}) => {
            return (
              <li className={s.project}>
                <button className={classNames(s.button, s.projectLabel)}>{title}</button>
                <p className={s.projectDescription}>{description}</p>
              </li>
            )
          })}
        </ul>
        <div className={s.contacts}>
          <pre>+38 063 348 35 48   |   mykola.a.deineko@gmail.com</pre>
        </div>
        <div className={s.fonts}>
          typefaces: rublena © ktf; mantonico © minttype
        </div>
      </main>
    );
  }
}
