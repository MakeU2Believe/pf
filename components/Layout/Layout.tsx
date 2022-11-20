import React from 'react';
import s from './Layout.module.scss';
import classNames from 'classnames';

export interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export class Layout extends React.Component<LayoutProps> {
  render() {
    return (
      <div className={classNames(s.root, this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}
