import React from 'react';

import s from './ProjectPage.module.scss';
import {Layout} from '../Layout';
import {ScrollableContent} from '../ScrollableContent';
import {Project} from '../../data';
import Link from 'next/link';
import {Label} from '../Label';
import {Header} from '../Header';
import classNames from 'classnames';
import {setProjectContext} from '../setProjectContext';
import {Initials} from '../Initials';

// sizes here should be synced with constant in prepare-images.js
const projectImagesSizes = {
  L: 3120,
  M: 1560,
  S: 780,
}

export class ProjectPage extends React.Component<Project> {
  private contentRef = React.createRef<HTMLDivElement>();

  componentDidMount() {
    setProjectContext(this.props.slug);
  }

  componentDidUpdate() {
    if (this.contentRef.current) {
      this.contentRef.current.scrollTop = 0;
    }
  }

  render() {
    const {title, year, type, brief, next, media} = this.props;

    return (
      <div className={s.root}>
        <Layout className={s.pageLayout}>
          <Header dummyHeader={true} />

          <Initials />
        </Layout>

        <ScrollableContent className={s.content} rootRef={this.contentRef}>
          <Header hideMobile={true} />

          <Label className={s.label}>{title}</Label>

          <p className={s.projectDetails}>{type} <br/> ( {year} )</p>
          <p className={s.projectBrief}>
            {brief}
          </p>

          <div className={s.media}>
            {
              media.map((row, i) => {
                return (
                  <div
                    key={i}
                    className={classNames(s.row, Array.isArray(row) && row.length === 2 ? s.twoItems : s.oneItem)}
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

          <span className={s.nextProjectTitle}>
            next project
          </span>

          <Link
            href={`/${next.slug}`}
            className={s.nextProjectLink}
          >
            <span className={s.nextProjectValue}>{next.title}</span> →
          </Link>
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
      case src.endsWith('webp'):
        const [fileName] = src.split('.');

        const srcSet = Object.entries(projectImagesSizes).map(([type, width]) => {
          return `${fileName}-${type}.webp ${width}w`
        }).join(',');

        return (
          <img srcSet={srcSet} src={`${fileName}-M.webp`} alt="" />
        )

      default:
        return 'UNRECOGNIZED FILE TYPE 😭'
    }
  }
}
