import React from 'react';

import s from './Footer.module.scss';
import classNames from 'classnames';

export interface FooterProps {
}

export class Footer extends React.Component<FooterProps> {
  render() {
    return (
      <>
        <div className={classNames(s.copyright)}>
          typefaces: rublena © ktf | mantonico © minttype
        </div>
        <div className={classNames(s.contacts)}>
          +38 063 348 35 48 | mykola.a.deineko@gmail.com
        </div>
      </>
    );
  }
}
