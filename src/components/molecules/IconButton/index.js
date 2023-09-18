import React from "react"
import { Ionicons } from '@expo/vector-icons'
import { Text } from '../../atoms'
import { ButtonContainer } from './style'
import { theme } from '../../../styles/theme'

export const IconButton = ({ iconName, label, onPress }) => {
    return (
        <ButtonContainer mt="40" onPress={onPress}>
            <Text size={15} mt={6} color="white"> {label}</Text>
            <Ionicons name={iconName} size={theme.metrics.px(24)} color={theme.colors.white}/>
        </ButtonContainer>
    )
}