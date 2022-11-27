import React from 'react';

import s from './Resume.module.scss';
import {Layout} from '../Layout';
import {Header} from '../Header';
import {Footer} from '../Footer';
import {ScrollableContent} from '../ScrollableContent';
import {Label} from '../Label';

export interface ResumeProps {
}

export class Resume extends React.Component<ResumeProps> {
  render() {
    return (
      <>
        <Layout>
          <Header link={{href: '/', children: 'portfolio'}} />

          <Footer />
        </Layout>

        <ScrollableContent>
          <Header />

          <div className={s.content}>
            <Label>career</Label>
            <p>
              july 2019: senior visual designer @Wix. I’ve assisted the design team in the development and implementation of visual identity, art directed photoshoots. In September of 2020 moved to a technical designer position, where I deepened my expertise in web design and product development.
            </p>

            <p>
              2014—2019: art director, business partner @Hooga — Kyiv-based independent multidisciplinary graphic design studio. Here I was leading one of the design teams, optimizing workflow, pitching concepts to clients, managing projects, and doing some lecturing at KAMA (Kyiv Academy of Arts). In 2018 Hooga received the Red Dot award in communication design.
            </p>

            <p>
              2011—2013: insurance administrator @Winner Imports Ukraine.
              I handled transportation insurance claims working for the official importer of Porsche, JLR, Volvo, Ford brands in Ukraine.
            </p>

            <Label className={s.label}>expertise</Label>
            <p>
              high proficiency: illustrator, indesign, photoshop, figma, editor x, javascript
              <br />
              goofing around with: webflow, after effect, cinema 4d, html/css
            </p>

            <Label className={s.label}>education</Label>
            <p>
              2013 — Visual Communications and Graphic Design at EDS.ua
              <br />
              2011 — Master’s degree in Automotive engineering at National
              University of Transport in Kyiv, Ukraine.
            </p>

            <Label className={s.label}>languages</Label>
            <p>
              ukrainian (native), english (advanced)
            </p>

          </div>
        </ScrollableContent>
      </>
    );
  }
}
