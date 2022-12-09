import React from 'react';

import s from './Header.module.scss';
import classNames from 'classnames';
import NextLink from 'next/link';

export type HeaderProps = {
  link?: {
    href: string,
    text: string,
    mobileText: string,
  };
  fake?: true;
}

export class Header extends React.Component<HeaderProps> {
  render() {
    const {link, fake} = this.props;

    return (<>
        <h2 className={classNames(s.name, {[s.fake]: fake})}>nick</h2>
        <h2 className={classNames(s.surname, {[s.fake]: fake})}>deineko</h2>

        {
          link && (
            <NextLink
              href={link.href}
              className={classNames(s.toggle, {
                [s.fake]: fake,
              })}
              data-title={link.mobileText}>
              {link.text}
            </NextLink>
          )
        }

        <h3 className={classNames(s.subtitle, {
          [s.fake]: fake,
        })}>art director, visual designer, tutor, car lover.</h3>
      </>
    );
  }
}
