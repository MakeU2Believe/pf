import React from 'react';
import Head from 'next/head';

export interface PageHeadProps {
  title: string;
  description: string;
}

export class PageHead extends React.Component<PageHeadProps> {
  render() {
    const {title, description} = this.props;

    return (
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      </Head>
    );
  }
}
