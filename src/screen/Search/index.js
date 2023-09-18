import React, { useState } from 'react'
import { FlatList, ActivityIndicator  } from 'react-native'
import { Text, Header, Container, Div, ImageStyle, IconButton, InputStyle, BtnSearch } from '../../components'
import { useGetData } from '../../services/hooks'
import { useNavigation } from '@react-navigation/native'

export const Search = () => {
  const navigation = useNavigation()
  const { getBooks } = useGetData();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const books = await getBooks(query);
    setResults(books);
    setLoading(false)
  };

  const onPressDetail = (item) => {
    navigation.navigate('Detail', { item })
  }

  const renderItem = ({ item }) => (
    <Container dir="row" h="220" align="center" justify="center" mt="20" bg="dark">
      <Div w="33">
        {item.volumeInfo.imageLinks && (
          <ImageStyle
            source={{ uri: item.volumeInfo.imageLinks.thumbnail }}
          />
        )}
      </Div>
      <Div align="center" w="55">
        <Text size="15" weight="bold" color="white">
          {' '}
          {item.volumeInfo.title}
        </Text>
        <Text size="15" color="white">
          {' '}
          Autor:{' '}
          {item.volumeInfo.authors && item.volumeInfo.authors.join(', ')}
        </Text>
        <Text size="15" color="white">
          {' '}
          Ano de Publicação: {item.volumeInfo.publishedDate}
        </Text>
            <IconButton 
              onPress={() => onPressDetail(item)}
              label="Saiba mais"
              iconName="information-circle-outline"
            />
      </Div>
    </Container>
  );

  return (
    <Container align="center" bg="background">
      <Header />
      <InputStyle
        w={230}
        mt={20}
        mb={10}
        placeholder="Buscar livro"
        placeholderTextColor="white"
        value={query}
        onChangeText={text => setQuery(text)}
      />
      <BtnSearch onPress={handleSearch} mb={20}>
        <Text color="white"> Buscar livros</Text>
      </BtnSearch>
      {loading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : (
        <FlatList
          data={results}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </Container>
  );
}

