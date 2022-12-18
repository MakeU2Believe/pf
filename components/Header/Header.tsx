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
  inContent?: true;
  hideMobile?: true;
}

export class Header extends React.Component<HeaderProps> {
  render() {
    const {link, inContent, hideMobile} = this.props;

    return (<>
        <h2 className={classNames(s.name, {[s.inContent]: inContent, [s.hideMobile]: hideMobile})}>nick</h2>
        <h2 className={classNames(s.surname, {[s.inContent]: inContent, [s.hideMobile]: hideMobile})}>deineko</h2>

        {
          link && (
            <NextLink
              href={link.href}
              className={classNames(s.toggle, {
                [s.inContent]: inContent,
                [s.hideMobile]: hideMobile,
              })}
              data-title={link.mobileText}>
              {link.text}
            </NextLink>
          )
        }

        <h3 className={classNames(s.subtitle, {
          [s.inContent]: inContent,
          [s.hideMobile]: hideMobile,
        })}>art director, visual designer, tutor, car lover.</h3>
      </>
    );
  }
}
