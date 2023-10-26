import React, { useState, useEffect } from "react";
import { Header, BtnBook, Text, GoBack, Container, Div } from "../../Components";
import { FlatList, Image } from "react-native";
import { getFavorites } from "../../Services/hooks/favorite"; // Importe a função getFavorites
import { useNavigation } from '@react-navigation/native';

export const FavoriteBooks = () => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    loadFavoriteBooks();
  }, []);

  const loadFavoriteBooks = async () => {
    const favorites = await getFavorites();
    setFavoriteBooks(favorites);
  };

  return (
    <Container bg="background">
        <Header> 
            FAVORITOS
        </Header>
        <GoBack />
      <FlatList
        data={favoriteBooks}
        keyExtractor={(item, index) => index.toString()} 
        renderItem={({ item }) => (
            <Div>
            <BtnBook onPress={() => navigation.navigate('Details', { item })}>
                <Image source={{ uri: item.image_url }} style={{ width: 120, height: 185 }} />
                <Text size="12" weight="bold" mt={3}>{item.título}</Text>
            </BtnBook>
        </Div>
        )}
      />
    </Container>
  );
};
