import React from "react"
import { Container, Text, Header, DivProfile, BtnProfile, BtnLogout } from '../../Components'
import { Image } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useAuth } from "../../Contexts/auth"

export const ProfileScreen = () => {
    const navigation = useNavigation();
    const { infoUser, logout } = useAuth();

    console.log(infoUser)
    const handleLogout = () => {
        logout(); 
        navigation.navigate('Login');
    };
    return(
        <Container bg="background" align="center">
            <Header> PERFIL </Header>
            <DivProfile dir="row" align="center" justify="center" h={150}>
                <Image 
                    source={require('../../../assets/logo.jpeg')}
                    style={{ width: 150, height: 140, borderRadius: 20 }}
                />
                <Text ml={20}> Meu perfil </Text>
            </DivProfile>
            <DivProfile h={250}>
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
            <DivProfile align="center" justify="center">
                <BtnLogout onPress={handleLogout}>
                    <Text size={15} color='white'> Sair da conta</Text>
                </BtnLogout>
            </DivProfile>
        </Container>
    )
}