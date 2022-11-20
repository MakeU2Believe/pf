import React from 'react';

import s from './ScrollableContent.module.scss';
import {Layout} from '../Layout';

export interface ScrollableContentProps {
  children: React.ReactNode;
}

export class ScrollableContent extends React.Component<ScrollableContentProps> {
  render() {
    return (
      <div className={s.root}>
        <Layout>
          {this.props.children}
        </Layout>
      </div>
    );
  }
}
