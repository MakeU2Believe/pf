import React from 'react';

import s from './Footer.module.scss';

const phone = '+38 (063) 348.35.48';
const email = 'mykola.a.deineko@gmail.com';

export interface FooterProps {
}

export class Footer extends React.Component<FooterProps> {
  render() {
    return (
      <>
        <div className={s.contacts}>
          <a href={`tel:${phone.replaceAll(' ', '')}`}>{phone}</a>
          <span className={s.divider}>{` `}|{` `}</span>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div className={s.copyright} id="copyright">
          typefaces: rublena © ktf, mantonico © mint type
        </div>
      </>
    );
  }
}
