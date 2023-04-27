import React from 'react';

import s from './Footer.module.scss';

const email = 'mykola.a.deineko@gmail.com';

export interface FooterProps {
}

export class Footer extends React.Component<FooterProps> {
  render() {
    return (
      <>
        <div className={s.contacts}>
          <a href={`mailto:${email}`}>&nbsp;Email me&nbsp;</a>
        </div>
      </>
    );
  }
}
