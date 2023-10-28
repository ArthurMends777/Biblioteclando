import React, { useState, useEffect } from "react";
import { Header, BtnBook, Text, GoBack, Container, Div } from "../../Components";
import { FlatList, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { getFavoriteBooks } from "../../Services/hooks/favorite";
import { useAuth } from "../../Contexts/auth";
export const FavoriteBooks = () => {
  const navigation = useNavigation();
  const { userToken } = useAuth();
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [isListEmpty, setIsListEmpty] = useState(false);

  useEffect(() => {
    getFavoriteBooksList();
  }, []);

  const getFavoriteBooksList = async () => {
    const books = await getFavoriteBooks(userToken);
    setFavoriteBooks(books);
    setIsListEmpty(books.length === 0); 
  };

  return (
    <Container bg="background">
        <Header> 
            FAVORITOS
        </Header>
        <GoBack />
        {isListEmpty ? (
          <Container bg="background" align="center" justify="center" h={234}> 
            <Text size={20} weight="bold">Nenhum livro favorito encontrado.</Text>
          </Container>
        ) : (
          <FlatList
            data={favoriteBooks}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Div>
                <BtnBook onPress={() => navigation.navigate('Details', { item })}>
                  <Image source={{ uri: item.image_url }} style={{ width: 120, height: 185 }} />
                  <Text size={12} weight="bold" mt={3}>
                    {item.título}
                  </Text>
                </BtnBook>
              </Div>
            )}
          />
            )}
    </Container>
  );
};
