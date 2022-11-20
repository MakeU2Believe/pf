import React from 'react';

import s from './Label.module.scss';
import classNames from 'classnames';

export interface LabelProps {
  className?: string;
  children: string;
}

export class Label extends React.Component<LabelProps> {
  render() {
    return (
      <span className={classNames(s.root, this.props.className)}>{this.props.children}</span>
    );
  }
}
