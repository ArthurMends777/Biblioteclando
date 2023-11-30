import React, { useState, useEffect } from "react";
import { Header, Container, Text, DivBook, BtnReserv, BtnFavorites, GoBack } from '../../Components';
import { Image } from 'react-native';
import { useGetData } from "../../Services/hooks/useGetData";
import { isBookFavorite, toggleFavorite } from "../../Services/hooks/favorite";
import { useAuth } from "../../Contexts/auth";


export const DetailBook = ({ route }) => {
  const { item } = route.params;
  const { getAutor, fazerEmprestimo, isBookBorrowed } = useGetData();
  const { infoUser } = useAuth();
  const [resultAutor, setResultAutor] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isBorrowed, setIsBorrowed] = useState(false);

  useEffect(() => {
    callGetAutorResult();
    checkIfFavorito();
    checkIfEmprestado();
  }, []);

  const callGetAutorResult = async () => {
    const results = await getAutor(item.id_Autor);
    if (!results.error) {
      setResultAutor(results);

    }
  };

  const checkIfFavorito = async () => {
    if (infoUser) {
      const livroEstaNoFavorito = await isBookFavorite(infoUser.id_leitor, item.id_livro);
      setIsFavorite(livroEstaNoFavorito);
    }
  };

  const toggleFavorito = async () => {
    try {
      await toggleFavorite(infoUser.id_leitor, item.id_livro);
      // Após adicionar/remover dos favoritos, atualiza o estado isFavorite
      checkIfFavorito();
    } catch (error) {
      console.error('Erro ao adicionar/remover dos favoritos:', error);
    }
  };
  
  const checkIfEmprestado = async () => {
    if (infoUser) {
      const livroEstaEmprestado = await isBookBorrowed(infoUser.id_leitor, item.id_livro);
      setIsBorrowed(livroEstaEmprestado);
    }
  };

  const pegarLivroEmprestado = async () => {
    try {
      if (!isBorrowed) {
        const response = await fazerEmprestimo(infoUser.id_leitor, item.id_livro, 1);
        if (response.success) {
          console.log('Livro emprestado com sucesso!');
        } else {
          console.error('response sem sucesso:', response.error);
        }
      } else {
        console.log('O livro já está emprestado.');
      }
    } catch (error) {
      console.error('Erro ao fazer empréstimo:', error);
    }
  };

  return (
    <Container bg="background">
      <Header> {item.nome_genero} </Header>
      <GoBack />
      <DivBook m={20}>
        <Image source={{ uri: item.image_url }} style={{ width: 140, height: 200 }} />
        <DivBook dir="column" align="center" w={250}>
          <Text weight="bold" size={20}>{item.título}</Text>
          <Text size={17}>Autor: {resultAutor.Nome_Autor}</Text>
          <Text size={17}>ISBN: {item.ISBN}</Text>
          <Text size={17}> Páginas: {item.Número_de_páginas} </Text>
          <BtnFavorites onPress={toggleFavorito}>
            <Text size={17}>
               {isFavorite ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
            </Text>
          </BtnFavorites>
          <BtnReserv onPress={pegarLivroEmprestado}>
            <Text size={17} color="white">
              {isBorrowed ? "Livro em leitura" : "Solicitar empréstimo"}
            </Text>
          </BtnReserv>
        </DivBook>
      </DivBook>
      <Text weight="bold" ml={8}> Descrição do livro: </Text>
      <Text size={18} ml={13}>{item.descrição}</Text>
    </Container>
  );
};
