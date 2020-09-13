import React from 'react';
import { LayoutContentWrapperStyle } from './layoutWrapper.style';

export default (props) => (
  <LayoutContentWrapperStyle>
    {props.children}
  </LayoutContentWrapperStyle>
);
