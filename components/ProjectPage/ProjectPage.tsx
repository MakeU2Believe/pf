import React from 'react';

import s from './ProjectPage.module.scss';
import {Layout} from '../Layout';
import {Footer} from '../Footer';
import {ScrollableContent} from '../ScrollableContent';
import {Heading} from '../Heading';
import {Project} from '../../data';
import Link from 'next/link';
import {Label} from '../Label';

export class ProjectPage extends React.Component<Project> {
  render() {
    const {title, year, type, brief} = this.props;

    return (
      <>
        <Layout className={s.pageLayout}>
          <Heading className={s.initials}>
            <Link href="/">
              nd
            </Link>
          </Heading>

          <Footer/>
        </Layout>

        <ScrollableContent>
          <div className={s.content}>

            <Label className={s.label}>{title}</Label>

            <div className={s.projectHeader}>
              <p className={s.projectDetails}>{type} <br /> {year}</p>
              <p className={s.projectBrief}>
                {brief}
              </p>
            </div>
          </div>
        </ScrollableContent>
      </>
    );
  }
}
