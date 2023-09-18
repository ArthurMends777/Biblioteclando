import React from 'react';
import { Header, Container, Text, GoBack, DivBook } from '../../components';
import { TouchableOpacity, Image } from 'react-native';
export const DetailBook = ({ route }) => {
  const { item } = route.params;

  return (
    <Container bg="background">
      <Header />
      <GoBack />
      <DivBook m={20}>
        <Image source={{ uri: item.capa_url }} style={{ width: 100, height: 150 }} />
        <DivBook dir="column" align="center" w={250}>
          <Text weight="bold">{item.titulo}</Text>
          <Text size={17}>Autor: {item.autor}</Text>
          <TouchableOpacity>
            <Text size={17} mt={20}>Adicionar aos favoritos</Text>
          </TouchableOpacity>
        </DivBook>
      </DivBook>
      <Text weight="bold"> Descrição do livro: </Text>
      <Text size={18}>{item.descricao}</Text>
    </Container>
  )
}
