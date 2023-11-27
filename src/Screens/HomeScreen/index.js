import React, { useState, useEffect } from 'react'
import { Container, Text, Header, BtnCategory } from '../../Components'
import { FlatList } from 'react-native'
import { useGetData } from '../../Services/hooks/useGetData'
import { useNavigation } from '@react-navigation/native'


export const HomeScreen = () => {
  const { getNomeGenero } = useGetData();
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getNomeGenero()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar categorias:', error);
      });
  }, [getNomeGenero]);

  const handleCategoryPress = ( category ) => {
    navigation.navigate('Category', { category });
  };

  const renderItem = ({ item }) => (
    <BtnCategory w={170} margin={5} onPress={() => handleCategoryPress(item)}>
      <Text size={20}>{item.nome_genero}</Text>
    </BtnCategory>
  );

  return (
    <Container align="center" bg="background">
      <Header mb={40}> CATEGORIAS </Header>

      <FlatList
        data={categories}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()} 
      />
    </Container>
  )
}
