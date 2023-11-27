import React, { useState, useEffect } from "react";
import { Header, BtnBook, Text, GoBack, Container, Div } from "../../Components";
import { FlatList, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { getFavoriteBooks } from "../../Services/hooks/favorite";
import { useAuth } from "../../Contexts/auth";
export const FavoriteBooks = () => {
  const navigation = useNavigation();
  const { infoUser } = useAuth();
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [isListEmpty, setIsListEmpty] = useState(false);

  useEffect(() => {
    getFavoriteBooksList();
  }, []);

  const getFavoriteBooksList = async () => {
    if (infoUser) {
      const leitorId = infoUser.id_leitor; // Obtém o ID do leitor a partir das informações do usuário
      const books = await getFavoriteBooks(leitorId); // Use o ID do leitor para buscar livros favoritos
      setFavoriteBooks(books);
      setIsListEmpty(books.length === 0);
    }
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
    </Container>
  );
};