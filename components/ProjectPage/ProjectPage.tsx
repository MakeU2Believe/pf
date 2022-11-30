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

export class ProjectPage extends React.Component<Project> {
  render() {
    const {title, year, type, brief, media} = this.props;

    return (
      <div className={s.root}>
        <Layout className={s.pageLayout}>
          <Heading level="H2" className={s.initials}>
            <Link href="/">
              nd
            </Link>
          </Heading>

          <Footer/>
        </Layout>

        <ScrollableContent className={s.content}>
          <Header link={{href: '/', children: ''}} fake={true}/>
            <Label className={s.label}>{title}</Label>

            <p className={s.projectDetails}>{type} <br /> {year}</p>
            <p className={s.projectBrief}>
              {brief}
            </p>

            <div className={s.media}>
              {
                media.map((row, i) => {
                  return <img key={i} src={`/_wixwhaaat/${row}`} alt="" className={s.row}/>
                })
              }
            </div>
        </ScrollableContent>
      </div>
    );
  }
}
