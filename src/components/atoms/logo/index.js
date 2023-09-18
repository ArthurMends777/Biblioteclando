import React from 'react'
import {LogoImageStyle} from './style'
import logoImage from '../../../../assets/logo.png';

const sizes = {
  small: 28,
  large: 100,
}

export const Logo = ({ source, size }) => {
  return(
    <LogoImageStyle source={logoImage} w={100} h={100}/>
  )
}


