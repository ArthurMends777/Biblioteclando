import React, { useState, useEffect } from "react";
import { HeaderContainer } from './style'
import { Text, Img } from '../../atoms'

export const Header = () => {
    return (
        <HeaderContainer>
            <Img w={50} h={50}/>
            <Text color="white" weight="bold" ml="10"> Biblioteclando </Text>
        </HeaderContainer>
    )
}