import AsyncStorage from '@react-native-async-storage/async-storage';

// Em getFavoriteBooks
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

      const existingBookIndex = favoritosArray.findIndex((item) => item.id_livro === livro.id_livro);

      if (existingBookIndex !== -1) {
        // Remover o livro existente
        favoritosArray = [...favoritosArray.slice(0, existingBookIndex), ...favoritosArray.slice(existingBookIndex + 1)];
      } else {
        // Adicionar o novo livro
        favoritosArray = [...favoritosArray, livro];
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



