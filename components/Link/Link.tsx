import React from 'react';

import s from './Link.module.scss';
import classNames from 'classnames';
import NextLink from 'next/link';

export interface LinkProps {
  href: string;
  children: string;
  className?: string;
  active?: boolean;
}

export class Link extends React.Component<LinkProps> {
  render() {
    const {href, className, children, active} = this.props;

    return (
      <NextLink href={href} className={classNames(s.root, className, {[s.active]: active})}>
        {children}
      </NextLink>
    );
  }
}
