import React from 'react';

import s from './ProjectPage.module.scss';
import {Layout} from '../Layout';
import {Footer} from '../Footer';
import {ScrollableContent} from '../ScrollableContent';
import {Heading} from '../Heading';
import {Project} from '../../data';
import Link from 'next/link';
import {Label} from '../Label';
import {Header} from '../Header';
import classNames from 'classnames';

export class ProjectPage extends React.Component<Project> {
  render() {
    const {title, year, type, brief, media} = this.props;

    return (
      <div className={s.root}>
        <Layout className={s.pageLayout}>
          <Header link={{href: '/', children: ''}} fake={true}/>

          <span className={s.initials}>
            <Link href="/">
              nd
            </Link>
          </span>

          <Footer/>
        </Layout>

        <ScrollableContent className={s.content}>
          <Header link={{href: '/', children: ''}} fake={true}/>

          <Label className={s.label}>{title}</Label>

          <p className={s.projectDetails}>{type} <br/> {year}</p>
          <p className={s.projectBrief}>
            {brief}
          </p>

          <div className={s.media}>
            {
              media.map((row, i) => {
                return (
                  <div
                    key={i}
                    className={classNames(s.row, {
                      [s.twoItems]: Array.isArray(row) && row.length === 2
                    })}
                  >
                    {
                      Array.isArray(row)
                        ? (
                          row.map((rowItem, j) => (
                            <div key={`${i}${j}`} className={classNames({
                              [s.empty]: !rowItem
                            })}>
                              {rowItem && this.renderMedia(rowItem)}
                            </div>
                          ))
                        ) : (
                          this.renderMedia(row)
                        )
                    }
                  </div>
                )
              })
            }
          </div>
        </ScrollableContent>
      </div>
    );
  }

  private renderMedia(src: string) {
    switch (true) {
      case src.endsWith('mp4'):
        return (
          <video key={src} src={src} autoPlay loop muted playsInline/>
        );
      case src.endsWith('jpg'):
        return (
          <img key={src} src={src} alt=""/>
        );
      default:
        return 'UNRECOGNIZED FILE TYPE 😭'
    }
  }
}
