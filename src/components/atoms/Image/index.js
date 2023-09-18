import React from 'react'
import {LogoImageStyle} from './style'
import logoImage from '../../../../assets/logo.png';

const sizes = {
  small: 28,
  large: 100,
}

export const Img = ({ w, h }) => {
  return(
    <LogoImageStyle source={logoImage} w={w} h={h}/>
  )
}
