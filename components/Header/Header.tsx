import React from 'react';

import s from './Header.module.scss';
import classNames from 'classnames';
import {Link, LinkProps} from '../Link';

export interface HeaderProps {
  link: LinkProps;
}

export class Header extends React.Component<HeaderProps> {
  render() {
    const {link} = this.props;

    return (<>
        <h2 className={classNames(s.heading, s.name)}>nick</h2>
        <h2 className={classNames(s.heading, s.surname)}>deineko</h2>

        <Link {...link} className={s.toggle} active={true} />

        <h2 className={classNames(s.subtitle)}>art director, visual designer, tutor, car lover.</h2>
      </>
    );
  }
}
