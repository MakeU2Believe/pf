import React from 'react';
import s from './Layout.module.scss';

export interface LayoutProps {
  children: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps> {
  render() {
    return (
      <div className={s.root}>
        {this.props.children}
      </div>
    );
  }
}
