import React from "react"
import { Container, Text, Header, DivProfile, BtnProfile } from '../../Components'
import { Image } from "react-native"
import { useNavigation } from "@react-navigation/native"
export const ProfileScreen = () => {
    const navigation = useNavigation()
    return(
        <Container bg="background" align="center">
            <Header> PERFIL </Header>
            <DivProfile dir="row" align="center" justify="center">
                <Image 
                    source={require('../../../assets/logo.jpeg')}
                    style={{ width: 150, height: 140, borderRadius: 20 }}
                />
                <Text ml={20}> Meu perfil</Text>
            </DivProfile>
            <DivProfile>
                <BtnProfile onPress={() => navigation.navigate('Favorite')}>
                    <Text ml={20}> Meus favoritos</Text>
                </BtnProfile>
                <BtnProfile>
                    <Text ml={20}> Livros em leitura</Text>
                </BtnProfile>
                <BtnProfile>
                    <Text ml={20}> Pegar um livro emprestado</Text>
                </BtnProfile>
                <BtnProfile>
                    <Text ml={20}> Histórico de leitura</Text>
                </BtnProfile>
            </DivProfile>           
        </Container>
    )
}