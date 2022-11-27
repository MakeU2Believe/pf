import React from 'react';

import s from './Header.module.scss';
import classNames from 'classnames';
import {Link, LinkProps} from '../Link';
import {Heading} from '../Heading';

export type HeaderProps = {
  link: LinkProps;
  fake?: true;
}

export class Header extends React.Component<HeaderProps> {
  render() {
    const {link, fake} = this.props;

    return (<>
        <Heading className={classNames(s.name, {
          [s.fake]: fake,
        })}>nick</Heading>
        <Heading className={classNames(s.surname, {
          [s.fake]: fake,
        })}>deineko</Heading>

        <Link {...link} className={classNames(s.toggle, {
          [s.fake]: fake,
        })} active={true}/>

        <h2 className={classNames(s.subtitle, {
            [s.fake]: fake,
          })}>art director, visual designer, tutor, car lover.</h2>
      </>
    );
  }
}
