import React, { useState, useEffect } from 'react';
import { Header, BtnBook, Text, GoBack, Container, Div } from '../../components';
import { useGetData } from '../../services/hooks';
import { FlatList, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export const CategoryScreen = ({ route }) => {
  const navigation = useNavigation();
  const { getBooksCategory } = useGetData();
  const { category } = route.params;
  const [results, setResults] = useState([]); 

  useEffect(() => {
    callGetCategoryResult();
  }, []);

  const callGetCategoryResult = async () => {
  const result = await getBooksCategory(category.name);
  if (!result.error) {
    // Filtrar os livros com a categoria "ficção"
    const fictionBooks = result.filter((item) => item.categoria === "Ficção");
    setResults(fictionBooks);
  }
};
const numberOfColumns = 3;
  return (
    <Container bg="background">
      <Header />
      <GoBack />
      <Text> {category.name}</Text>
      <FlatList
        data={results}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numberOfColumns}
        renderItem={({ item }) => (
          <Div bg="dark">
            <BtnBook onPress={() => navigation.navigate('Detail', { item })}>
                <Image source={{ uri: item.capa_url }} style={{ width: 100, height: 150 }} />
                <Text size="14" weight="bold">{item.titulo}</Text>
            </BtnBook>
          </Div>
        )}
      />
    </Container>
  );
};
