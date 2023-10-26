import React from "react";
import { LogoImageStyle } from "./style";
import { Image } from '../../../../assets/logo.jpeg'

export const Logo = ({source}) => {
    return(
      <LogoImageStyle source={Image} w={100} h={100}/>
    )
  }