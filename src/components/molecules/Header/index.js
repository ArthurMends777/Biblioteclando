import React from "react";
import { HeaderContainer } from './style'
import { Text } from '../../atoms'
import { useNavigation } from '@react-navigation/native'
import { Image, TouchableOpacity } from 'react-native'

export const Header = ({children, ...props}) => {
    const navigation = useNavigation()

  

    return (
        <HeaderContainer {...props}>
            <TouchableOpacity>
                <Image 
                    source={require('../../../../assets/logo.jpeg')}
                    style={{ width: 120, height: 130}}
                />
            </TouchableOpacity>
            <Text color="white" weight="bold" mt={5} size={26}> 
                {children} 
            </Text>
        </HeaderContainer>
    )
}