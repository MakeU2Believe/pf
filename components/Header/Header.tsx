import React from 'react';

import s from './Header.module.scss';
import classNames from 'classnames';
import {isMobile} from '../isMobile';
import {throttle} from 'throttle-debounce';
import {Initials} from '../Initials';

export type HeaderProps = {
  dummyHeader?: true;
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
    const {dummyHeader, hideMobile, showInitials} = this.props;

    return (<>
        <h2 className={classNames(s.name, {[s.dummyHeader]: dummyHeader, [s.hideMobile]: hideMobile})}>
          Nick
        </h2>
        <h2 id="surname" className={classNames(s.surname, {[s.dummyHeader]: dummyHeader, [s.hideMobile]: hideMobile})}>
          Deineko
        </h2>

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
