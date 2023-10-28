import AsyncStorage from '@react-native-async-storage/async-storage';

/*export const addFavoriteBook = async (userToken, book) => {
  try {
    const favoritos = await AsyncStorage.getItem(`favoriteBooks_${userToken}`);
    let favoritosArray = [];

    if (favoritos) {
      favoritosArray = JSON.parse(favoritos);
    }

    favoritosArray.push(book);
    await AsyncStorage.setItem(`favoriteBooks_${userToken}`, JSON.stringify(favoritosArray));

    
  } catch (error) {
    console.error('Erro ao adicionar livro aos favoritos:', error);
  }
};

export const removeFavoriteBook = async (userToken, book) => {
  try {
    // Recupere a lista de favoritos do AsyncStorage
    const favoritos = await AsyncStorage.getItem(`favoriteBooks_${userToken}`);
    let favoritosArray = [];

    if (favoritos) {
      favoritosArray = JSON.parse(favoritos);
    }

    // Encontre o índice do livro na lista de favoritos
    const index = favoritosArray.findIndex((item) => item.id === book.id);

    if (index !== -1) {
      // Se o livro estiver nos favoritos, remova-o
      favoritosArray.splice(index, 1);
    }

    // Atualize a lista de favoritos no AsyncStorage
    await AsyncStorage.setItem(`favoriteBooks_${userToken}`, JSON.stringify(favoritosArray));

    
  } catch (error) {
    console.error('Erro ao remover livro dos favoritos:', error);
  }
};*/

export const getFavoriteBooks = async (userToken) => {
  try {
    const favoriteBooksJSON = await AsyncStorage.getItem(`favoriteBooks_${userToken}`);
    if (favoriteBooksJSON) {

      return JSON.parse(favoriteBooksJSON);
    } else {
      return []; // Retorna um array vazio quando não há favoritos armazenados
    }

  } catch (error) {
    console.error('Erro ao obter lista de livros favoritos:', error);
    return [];
  }
};

export const toggleFavorite = async (userToken, livro) => {
  try {
    if (livro && livro.id_livro) {
      // Recupere a lista de favoritos do AsyncStorage
      const favoritos = await AsyncStorage.getItem(`favoriteBooks_${userToken}`);
      let favoritosArray = [];

      if (favoritos) {
       // console.log(" favoritos: ",favoritos)
        favoritosArray = JSON.parse(favoritos);
      }

      // Verifique se o livro já está nos favoritos
        const existingBook = favoritosArray.find((item) => item.id_livro === livro.id_livro);

        if (existingBook) {
          // Se o livro já estiver nos favoritos, remova-o
          favoritosArray = favoritosArray.filter((item) => item.id_livro !== livro.id_livro);
        } else {
          // Se o livro não estiver nos favoritos, adicione-o
          favoritosArray.push(livro);
        }
        
        // Atualize a lista de favoritos no AsyncStorage
      //console.log("Valor de favoritosArray antes de definir o AsyncStorage: ", favoritosArray);
      await AsyncStorage.setItem(`favoriteBooks_${userToken}`, JSON.stringify(favoritosArray));
      //console.log("Valor de favoritosArray após definir o AsyncStorage: ", favoritosArray);
    } else {
      console.error('O objeto livro é inválido ou não possui a propriedade "id_livro".');
    }
  } catch (error) {
    console.error('Erro ao adicionar/remover dos favoritos:', error);
  }
};
