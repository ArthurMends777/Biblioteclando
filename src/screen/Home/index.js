import React, { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {  Header, Container, Text, BtnCategory } from '../../components'

const categories = [
  { id: '1', name: 'Ficção' },
  { id: '2', name: 'Não Ficção' },
  { id: '3', name: 'Romance' },
  { id: '4', name: 'Fantasia' },
  { id: '5', name: 'Mistério' },
  // Adicione mais categorias conforme necessário
];

export const Home = () => {
  const navigation = useNavigation();

  const handleCategoryPress = (category) => {
    navigation.navigate('Category', { category });
  };

  const renderItem = ({ item }) => (
    <BtnCategory w={200} h={70}margin={3} onPress={() => handleCategoryPress(item)}>
      <Text>{item.name}</Text>
    </BtnCategory>
  );
  const numberOfColumns = 2;
  return (
    <Container justify="center" align="center" bg="background">
      <Header />
      <Text mt="10" mb="10" weight="bold">Categorias</Text>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Container>
  )
}
