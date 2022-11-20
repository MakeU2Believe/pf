import React from 'react';

import s from './Header.module.scss';
import classNames from 'classnames';
import {Link, LinkProps} from '../Link';
import {Heading} from '../Heading';

export interface HeaderProps {
  link: LinkProps;
}

export class Header extends React.Component<HeaderProps> {
  render() {
    const {link} = this.props;

    return (<>
        <Heading className={s.name}>nick</Heading>
        <Heading className={s.surname}>deineko</Heading>

        <Link {...link} className={s.toggle} active={true} />

        <h2 className={classNames(s.subtitle)}>art director, visual designer, tutor, car lover.</h2>
      </>
    );
  }
}
