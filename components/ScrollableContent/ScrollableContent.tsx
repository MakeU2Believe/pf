import React, {forwardRef, UIEventHandler} from 'react';

import s from './ScrollableContent.module.scss';
import {Layout} from '../Layout';
import classNames from 'classnames';

export interface ScrollableContentProps {
  children: React.ReactNode;
  className?: string;
  rootRef?: React.Ref<HTMLDivElement>;
  onScroll?: UIEventHandler<HTMLDivElement>;
}

export class ScrollableContent extends React.Component<ScrollableContentProps> {
  render() {
    const {className, rootRef, onScroll, children} = this.props;

    return (
      <div className={classNames(s.root, className)} ref={rootRef} onScroll={onScroll}>
        <Layout>
          {children}
        </Layout>
      </div>
    );
  }
}
