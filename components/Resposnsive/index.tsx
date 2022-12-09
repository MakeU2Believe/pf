import React from 'react';
import { useMediaQuery } from 'react-responsive'

export const Mobile = ({ children }: {children: JSX.Element}) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return isMobile ? children : null;
}
