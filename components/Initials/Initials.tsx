import Link from 'next/link';
import s from './Initials.module.scss';
import React from 'react';
import classNames from 'classnames';

interface InitialsProps {
  className?: string;
}

export const Initials = ({className}: InitialsProps) => {
  return (
    <Link href="/" className={classNames(s.initials, className)}>
      ND
    </Link>
  )
}
