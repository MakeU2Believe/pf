import React from 'react';

import s from './Header.module.scss';
import classNames from 'classnames';
import {Heading} from '../Heading';
import NextLink from 'next/link';

export type HeaderProps = {
  link: {
    href: string,
    children: string,
  };
  fake?: true;
}

export class Header extends React.Component<HeaderProps> {
  render() {
    const {link, fake} = this.props;

    return (<>
        <Heading level="H2" className={classNames(s.name, {
          [s.fake]: fake,
        })}>nick</Heading>
        <Heading level="H2" className={classNames(s.surname, {
          [s.fake]: fake,
        })}>deineko</Heading>

        <Heading level="H3" className={classNames(s.toggle, {
          [s.fake]: fake,
        })}>
          <NextLink {...link} />
        </Heading>


        <Heading level="H3" className={classNames(s.subtitle, {
            [s.fake]: fake,
          })}>art director, visual designer, tutor, car lover.</Heading>
      </>
    );
  }
}
