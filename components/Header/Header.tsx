import React from 'react';

import s from './Header.module.scss';
import classNames from 'classnames';
import NextLink from 'next/link';
import {mainInfo} from '../../data';
import {isMobile} from '../isMobile';
import {throttle} from 'throttle-debounce';
import {Initials} from '../Initials';

export type HeaderProps = {
  link?: {
    href: string,
    text: string,
    mobileText: string,
  };
  inContent?: true;
  hideMobile?: true;
  showInitials?: true;
}

export type HeaderState = {
  showInitials: boolean;
}

export class Header extends React.Component<HeaderProps, HeaderState> {
  state = {
    showInitials: false,
  }

  componentDidMount() {
    if (isMobile() && this.props.showInitials) {
      document.addEventListener('scroll', throttle(100, () => {
        const showInitials = window.scrollY > window.innerHeight / 2;

        if (showInitials !== this.state.showInitials) {
          this.setState({
            showInitials,
          })
        }
      }));
    }
  }

  render() {
    const {link, inContent, hideMobile, showInitials} = this.props;

    return (<>
        <h2 className={classNames(s.name, {[s.inContent]: inContent, [s.hideMobile]: hideMobile})}>nick</h2>
        <h2 className={classNames(s.surname, {[s.inContent]: inContent, [s.hideMobile]: hideMobile})}>deineko</h2>

        {
          link && (
            <NextLink
              href={link.href}
              className={classNames(s.toggle, {
                [s.inContent]: inContent,
                [s.hideMobile]: hideMobile,
              })}
              data-title={link.mobileText}>
              {link.text}
            </NextLink>
          )
        }

        <h3 id="subtitle" className={classNames(s.subtitle, {
          [s.inContent]: inContent,
          [s.hideMobile]: hideMobile,
        })}>{mainInfo.subtitle}</h3>

        {
          showInitials && (
            <Initials className={classNames(s.initials, {
              [s.showInitials]: this.state.showInitials,
            })} />
          )
        }
      </>
    );
  }
}
