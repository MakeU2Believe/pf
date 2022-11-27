import React from 'react';

import s from './Header.module.scss';
import classNames from 'classnames';
import {Link, LinkProps} from '../Link';
import {Heading} from '../Heading';

export type HeaderProps = {
  link?: LinkProps;
}

export class Header extends React.Component<HeaderProps> {
  render() {
    const {link} = this.props;

    return (<>
        <Heading className={classNames(s.name, {
          [s.fake]: !link,
        })}>nick</Heading>
        <Heading className={classNames(s.surname, {
          [s.fake]: !link,
        })}>deineko</Heading>

        {this.props.link && <Link {...this.props.link} className={s.toggle} active={true}/>}

        {this.props.link &&
          <h2 className={classNames(s.subtitle)}>art director, visual designer, tutor, car lover.</h2>}
      </>
    );
  }
}
