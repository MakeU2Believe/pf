import React, {forwardRef} from 'react';

import s from './ScrollableContent.module.scss';
import {Layout} from '../Layout';
import classNames from 'classnames';

export interface ScrollableContentProps {
  children: React.ReactNode;
  className?: string;
  rootRef?: React.Ref<HTMLDivElement>;
}

export class ScrollableContent extends React.Component<ScrollableContentProps> {
  render() {
    const {className, rootRef, children} = this.props;

    return (
      <div className={classNames(s.root, className)} ref={rootRef}>
        <Layout>
          {children}
        </Layout>
      </div>
    );
  }
}
