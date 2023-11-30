import AsyncStorage from '@react-native-async-storage/async-storage';

export const toggleFavorite = async (id_leitor, livroId) => {
  try {
    if (!livroId) {
      console.error('ID do livro é inválido.');
      return;
    }

    const favoritos = await AsyncStorage.getItem(`favoriteBooks_${id_leitor}`);
    let favoritosArray = [];

    if (favoritos) {
      favoritosArray = JSON.parse(favoritos);
    }

    const existingBookIndex = favoritosArray.indexOf(livroId);

    if (existingBookIndex !== -1) {
      // Se o livro já estiver na lista, remove
      favoritosArray.splice(existingBookIndex, 1);
    } else {
      // Se não estiver na lista, adiciona
      favoritosArray.push(livroId);
    }

    // Atualiza a lista de favoritos no AsyncStorage
    await AsyncStorage.setItem(`favoriteBooks_${id_leitor}`, JSON.stringify(favoritosArray));
  } catch (error) {
    console.error('Erro ao adicionar/remover dos favoritos:', error);
  }
};

// Função para verificar se um livro está na lista de favoritos do usuário
export const isBookFavorite = async (id_leitor, livroId) => {
  try {
    const favoritos = await AsyncStorage.getItem(`favoriteBooks_${id_leitor}`);
    if (favoritos) {
      const favoritosArray = JSON.parse(favoritos);
      return favoritosArray.includes(livroId);
    }
    return false;
  } catch (error) {
    console.error('Erro ao verificar favoritos:', error);
    return false;
  }
};

