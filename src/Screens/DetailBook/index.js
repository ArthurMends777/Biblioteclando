import React, { useState, useEffect } from "react";
import { Header, Container, Text, DivBook, BtnReserv, BtnFavorites } from '../../Components';
import { Image } from 'react-native';
import { useGetData } from "../../Services/hooks/useGetData";
import { getFavorites, toggleFavorite } from "../../Services/hooks/favorite";

export const DetailBook = ({ route }) => {
  const { item } = route.params;
  const { getAutor } = useGetData();
  const [resultAutor, setResultAutor] = useState([]);
  const [isFavorito, setIsFavorito] = useState(false); 

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
    const favoritos = await getFavorites();
    const livroEncontrado = favoritos.find((livro) => livro.id === item.id);
    setIsFavorito(!!livroEncontrado);
  };

  const toggleFavorito = async () => {
    if (isFavorito) {
      await toggleFavorite(item); // Remover dos favoritos
    } else {
      await toggleFavorite(item); // Adicionar aos favoritos
    }
    checkIfFavorito(); // Atualize o estado isFavorito após a ação
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
              {isFavorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
            </Text>
          </BtnFavorites>
          <BtnReserv>
            <Text size={17} color="white">Solicitar empréstimo </Text>
          </BtnReserv>
        </DivBook>
      </DivBook>
      <Text weight="bold"> Descrição do livro: </Text>
      <Text size={18}>{item.descrição}</Text>
    </Container>
  );
};
