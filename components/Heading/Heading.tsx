import React from 'react';

import s from './Heading.module.scss';
import classNames from 'classnames';

export interface HeadingProps {
  level: 'H2' | 'H3';
  className?: string;
  children: React.ReactNode;
}

export class Heading extends React.Component<HeadingProps> {
  render() {
    const {level, className, children} = this.props;

    switch (level) {
      case 'H2':
        return <h2 className={classNames(s.h2, className)}>{children}</h2>
      case 'H3':
        return <h3 className={classNames(s.h3, className)}>{children}</h3>
      default:
        throw new Error('Unspecified error');
    }
  }
}
