import React from 'react';

import s from './Heading.module.scss';
import classNames from 'classnames';

export interface HeadingProps {
  className?: string;
  children: React.ReactNode;
}

export class Heading extends React.Component<HeadingProps> {
  render() {
    const {className, children} = this.props;
    return (
      <h2 className={classNames(s.heading, className)}>{children}</h2>
    );
  }
}
