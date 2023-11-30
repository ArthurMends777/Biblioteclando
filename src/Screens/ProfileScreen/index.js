import React from "react"
import { Container, Text, Header, DivProfile, BtnProfile, BtnLogout } from '../../Components'
import { useNavigation } from "@react-navigation/native"
import { useAuth } from "../../Contexts/auth"

export const ProfileScreen = () => {
    const navigation = useNavigation();
    const { infoUser, logout } = useAuth();

    const handleLogout = () => {
        logout(); 
        navigation.navigate('Logout');
    };
    return(
        <Container bg="background" align="center">
            <Header> PERFIL </Header>
            <DivProfile dir="row" align="center" justify="center" h={40} mt={30}>
                <Text ml={16} size={25}> {infoUser.nome} </Text>
            </DivProfile>
            <DivProfile h={280} align="center" justify="center">

                <BtnProfile onPress={() => navigation.navigate('Favorite')}>
                    <Text size={21}> Meus favoritos</Text>
                </BtnProfile>

                <BtnProfile onPress={() => navigation.navigate('History')}>
                    <Text size={21}> Livros em leitura</Text>
                </BtnProfile>

                <BtnProfile onPress={() => navigation.navigate('Livros')}>
                    <Text size={21}> Histórico de leitura</Text>
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