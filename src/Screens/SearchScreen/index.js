import React, { useState, useEffect } from 'react';
import { Text, Container, Header, InputStyle, BtnSearch, Div, BtnBook } from '../../Components';
import { useGetData } from '../../Services/hooks/useGetData';
import { FlatList, ActivityIndicator, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";


export const SearchScreen = () => {
  const { searchBooks } = useGetData();
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleSearch = async () => {
    setLoading(true);
    const results = await searchBooks(searchText);
    setSearchResults(results);
    setLoading(false);
  };

  const numberOfColumns = 3;
  return (
    <Container bg="background">
      <Header> PESQUISAR </Header>
      <Container h={100} align="center" bg="background">
        <InputStyle
          style={{
            backgroundColor: '#FFFFFF'
          }}
          w={230}
          mt={20}
          mb={10}
          placeholder="Digite sua pesquisa"
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />
        <BtnSearch onPress={handleSearch}>
          <Text>Buscar</Text>
        </BtnSearch>
      </Container>
      {loading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item, index) => index.toString()}
          numColumns={numberOfColumns}
          renderItem={({ item }) => (
            <Div>
                <BtnBook onPress={() => navigation.navigate('Details', { item })}>
                    <Image source={{ uri: item.image_url }} style={{ width: 120, height: 185 }} />
                    <Text size="12" weight="bold" mt={3}>{item.título}</Text>
                </BtnBook>
            </Div>
          )}
        />
      )}
    </Container>
  );
};
