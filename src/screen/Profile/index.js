import React from "react"
import {  Header, Container, Text, DivProfile, Img, BtnProfile } from '../../components'

export const Profile= () => {
    return(
        <Container bg="background" align="center">
            <DivProfile dir="row" align="center" justify="center">
                <Img w={100} h={100}/>
                <Text color="white" ml={20}> Meu perfil</Text>
            </DivProfile>
            <DivProfile>
                <BtnProfile>
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