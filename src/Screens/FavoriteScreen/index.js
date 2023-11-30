import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, Image } from "react-native";
import { Container, Header, BtnBook, Text, GoBack, Div } from "../../Components";
import { useNavigation } from '@react-navigation/native';
import { useAuth } from "../../Contexts/auth";
import { useGetData } from "../../Services/hooks/useGetData";

export const FavoriteBooks = () => {
  const navigation = useNavigation();
  const { infoUser } = useAuth();
  const { getFavoriteBooksDetails } = useGetData();
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [isListEmpty, setIsListEmpty] = useState(false);
  const [loading, setLoading] = useState(true); // State para controlar o carregamento

  useEffect(() => {
    fetchFavoriteBooks();
  }, []);

  const fetchFavoriteBooks = async () => {
    try {
      if (infoUser) {
        const favoriteBooksDetails = await getFavoriteBooksDetails(infoUser.id_leitor);
        setFavoriteBooks(favoriteBooksDetails);
        setIsListEmpty(favoriteBooksDetails.length === 0);
        setLoading(false); // Indicar que a lista foi carregada
      }
    } catch (error) {
      console.error('Erro ao buscar livros favoritos:', error);
      setLoading(false); // Indicar que houve erro no carregamento
    }
  };

  return (
    <Container bg="background">
      <Header>FAVORITOS</Header>
      <GoBack />
      {loading ? ( // Renderizar o ActivityIndicator enquanto os livros são carregados
        <Container bg="background" align="center" justify="center" h={234}>
          <ActivityIndicator size="large" color="#0000ff" />
        </Container>
      ) : (
        <>
          {isListEmpty ? (
            <Container bg="background" align="center" justify="center" h={234}>
              <Text size={20} weight="bold">Nenhum livro favorito encontrado.</Text>
            </Container>
          ) : (
            <FlatList
              data={favoriteBooks}
              numColumns={3}
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
        </>
      )}
    </Container>
  );
};
