import React from 'react';

import s from './ScrollableContent.module.scss';
import {Layout} from '../Layout';
import classNames from 'classnames';

export interface ScrollableContentProps {
  children: React.ReactNode;
  className?: string;
}

export class ScrollableContent extends React.Component<ScrollableContentProps> {
  render() {
    const {className, children} = this.props;

    return (
      <div className={classNames(s.root, className)}>
        <Layout>
          {children}
        </Layout>
      </div>
    );
  }
}
