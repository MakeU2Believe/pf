import React, {FocusEventHandler} from 'react';

import s from './Link.module.scss';
import classNames from 'classnames';
import NextLink from 'next/link';

export interface LinkProps {
  href: string;
  children: string;
  className?: string;
  active?: boolean;
  onFocus?: FocusEventHandler<HTMLAnchorElement>;
  onBlur?: FocusEventHandler<HTMLAnchorElement>;
}

export class Link extends React.Component<LinkProps> {
  render() {
    const {className, children, active, ...rest} = this.props;

    return (
      <NextLink
        className={classNames(s.root, className, {[s.active]: active})}
        {...rest}
      >
        {children}
      </NextLink>
    );
  }
}
