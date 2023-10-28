import React, { useState, useEffect } from "react";
import { Header, Container, Text, DivBook, BtnReserv, BtnFavorites } from '../../Components';
import { Image } from 'react-native';
import { useGetData } from "../../Services/hooks/useGetData";
import { getFavoriteBooks, toggleFavorite } from "../../Services/hooks/favorite";
import { useAuth } from "../../Contexts/auth";

export const DetailBook = ({ route }) => {
  const { item } = route.params;
  const { getAutor } = useGetData();
  const { userToken } = useAuth();
  const [resultAutor, setResultAutor] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    callGetAutorResult();
    checkIfFavorito();
  }, []);

  const callGetAutorResult = async () => {
    const results = await getAutor(item.id_Autor);
    if (!results.error) {
      setResultAutor(results);
    }
  };

  const checkIfFavorito = async () => {
    const favoritos = await getFavoriteBooks(userToken);
    const livroEncontrado = favoritos.find((book) => book.id === item.id);
    setIsFavorite(!!livroEncontrado);
  };

  const toggleFavorito = async () => {
    if (isFavorite) {
      // Se o livro estiver nos favoritos, remova-o
      await toggleFavorite(userToken, item);
    } else {
      // Caso contrário, adicione-o
      await toggleFavorite(userToken, item);
    }
    // Atualize o estado para refletir a ação do usuário
    checkIfFavorito();
  };


  return (
    <Container bg="background">
      <Header> {item.título} </Header>
      <DivBook m={20}>
        <Image source={{ uri: item.image_url }} style={{ width: 140, height: 200 }} />
        <DivBook dir="column" align="center" w={250}>
          <Text weight="bold" size={20}>{item.título}</Text>
          <Text size={17}>Autor: {resultAutor.Nome_Autor}</Text>
          <Text size={17}>ISBN: {item.ISBN}</Text>
          <Text size={17}> Páginas: {item.Número_de_páginas} </Text>
          <BtnFavorites onPress={toggleFavorito}>
            <Text size={17}>
              {isFavorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
            </Text>
          </BtnFavorites>
          <BtnReserv>
            <Text size={17} color="white">Solicitar empréstimo </Text>
          </BtnReserv>
        </DivBook>
      </DivBook>
      <Text weight="bold" ml={8}> Descrição do livro: </Text>
      <Text size={18} ml={13}>{item.descrição}</Text>
    </Container>
  );
};
