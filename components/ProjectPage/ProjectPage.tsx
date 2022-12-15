import React from 'react';

import s from './ProjectPage.module.scss';
import {Layout} from '../Layout';
import {Footer} from '../Footer';
import {ScrollableContent} from '../ScrollableContent';
import {Project} from '../../data';
import Link from 'next/link';
import {Label} from '../Label';
import {Header} from '../Header';
import classNames from 'classnames';
import NextLink from 'next/link';

export class ProjectPage extends React.Component<Project> {
  render() {
    const {title, year, type, brief, prev, next, media} = this.props;

    return (
      <div className={s.root}>
        <Layout className={s.pageLayout}>
          <Header fake={true}/>

          <Link href="/" className={s.initials}>
            nd
          </Link>

          <Footer/>
        </Layout>

        <ScrollableContent className={s.content}>
          <Header fake={true}/>

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

            <NextLink
              href={`/project/${prev.slug}`}
            >
              {`<`} {prev.title}
            </NextLink>
            <br/>
            <NextLink
              href={`/project/${next.slug}`}
            >
              {next.title} {`>`}
            </NextLink>
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
      case src.endsWith('jpg') || src.endsWith('jpeg'):
        return (
          <img key={src} src={src} alt=""/>
        );
      default:
        return 'UNRECOGNIZED FILE TYPE 😭'
    }
  }
}
