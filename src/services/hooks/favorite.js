import AsyncStorage from '@react-native-async-storage/async-storage';

export const getFavoriteBooks = async (id_leitor) => {
  try {
    const favoriteBooksJSON = await AsyncStorage.getItem(`favoriteBooks_${id_leitor}`);
    if (favoriteBooksJSON) {
      return JSON.parse(favoriteBooksJSON);
    } else {
      return [];
    }
  } catch (error) {
    console.error('Erro ao obter lista de livros favoritos:', error);
    return [];
  }
};


export const toggleFavorite = async (id_leitor, livro) => {
  try {
    if (livro && livro.id_livro) {
      const favoritos = await AsyncStorage.getItem(`favoriteBooks_${id_leitor}`);
      let favoritosArray = [];

      if (favoritos) {
        favoritosArray = JSON.parse(favoritos);
      }

      const existingBook = favoritosArray.find((item) => item.id_livro === livro.id_livro);

      if (existingBook) {
        favoritosArray = favoritosArray.filter((item) => item.id_livro !== livro.id_livro);
      } else {
        favoritosArray.push(livro);
      }

      // Atualize a lista de favoritos no AsyncStorage
      await AsyncStorage.setItem(`favoriteBooks_${id_leitor}`, JSON.stringify(favoritosArray));
    } else {
      console.error('O objeto livro é inválido ou não possui a propriedade "id_livro".');
    }
  } catch (error) {
    console.error('Erro ao adicionar/remover dos favoritos:', error);
  }
};

