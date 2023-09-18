import React, { useState } from 'react';
import {  Logo, Container, Text, InputLogin, BtnCategory } from '../../components'
import { useNavigation } from '@react-navigation/native'

export const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation(); 
    
    const handleLogin = async () => {
        navigation.navigate('Home');
    };

    return (
        <Container bg="background" align="center" justify="center">
            <Logo />
            <InputLogin
                style={{
                    backgroundColor: '#6D87A6'
                }}
                mt={20}
                placeholderTextColor="white"
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <InputLogin
                style={{
                    backgroundColor: '#6D87A6'
                }}
                mb={20}
                placeholderTextColor="white"
                placeholder="Senha"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            <BtnCategory onPress={handleLogin} w={300}>
                <Text color="white"> Entrar </Text>
            </BtnCategory>
        </Container>
    );
};