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
    const linkProps = {href: '/', text: '_portfolio_', mobileText: 'pf'};

    return (
      <>
        <Layout>
          <Header link={linkProps} />

          <Footer />
        </Layout>

        <ScrollableContent>
          <Header link={linkProps} inContent={true} showInitials={true}/>

          <div className={s.content}>
            <Label>career</Label>
            <p>
              since july 2019: senior visual designer @wix. I’ve assisted the design team in the development and implementation of visual identity, art directed photoshoots, supported internal and external company events. In september of 2020 moved to a technical designer position, where i deepened my expertise in web design and product development.
            </p>

            <p>
              2014—2019: art director, business partner @hooga — kyiv-based independent multidisciplinary graphic design studio. Here i was leading one of the design teams, optimizing workflow, pitching concepts to clients, managing projects, and doing some lecturing at kama (kyiv academy of media arts). In 2018 hooga received the red dot award in communication design.
            </p>

            <p>
              2011—2013: insurance administrator @winner imports ukraine.
              I handled transportation insurance claims working for the official importer of porsche, jaguar, land rover, volvo, ford brands in ukraine.
            </p>

            <Label className={s.label}>expertise</Label>
            <p>
              art direction, branding, identity design, web design, editorial design
            </p>

            <Label className={s.label}>skills</Label>
            <p>
              high proficiency: illustrator, indesign, photoshop, figma, editor x, javascript
              <br />
              goofing around with: webflow, after effect, cinema 4d, html/css
            </p>

            <Label className={s.label}>education</Label>
            <p>
              2013 — visual communications and graphic design at eds.ua
              <br />
              2011 — master’s degree in automotive engineering at national
              university of transport in kyiv, ukraine.
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
