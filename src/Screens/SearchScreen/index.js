import React, { useState } from 'react';
import { Text, Container, Header, InputStyle, BtnSearch, Div, BtnBook, ScreenScrollContainer } from '../../Components';
import { useGetData } from '../../Services/hooks/useGetData';
import { FlatList, ActivityIndicator, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export const SearchScreen = () => {
  const { searchBooks } = useGetData();
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [sla, setSla] = useState('');
  const navigation = useNavigation();

  const handleSearch = async () => {
    setLoading(true);
    if (searchText === '') {
      setSearchResults([]);
      setSla('Digite algo para buscar');
      setNoResults(false);
      setLoading(false);
      return;
    }
    setSla('');
    const results = await searchBooks(searchText);
    setSearchResults(results);
    setNoResults(results.length === 0);
    setLoading(false);
  };

  const numberOfColumns = 3;
  return (
    <Container bg="background">
      <Header> PESQUISAR </Header>
      <Container h={100} mb={40} align="center" bg="background">
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
      <Text ml={80} size={20}> {sla} </Text>
      {loading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : (
        <>
          {noResults ? (
            <Text ml={80} size={20}>Nenhum livro encontrado.</Text>
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
        </>
      )}
    </Container>
  );
};