import AsyncStorage from '@react-native-async-storage/async-storage';

// Função para adicionar/remover um livro da lista de favoritos
export const toggleFavorite = async (livro) => {
  try {
    // Recupere a lista de favoritos do AsyncStorage
    const favoritos = await AsyncStorage.getItem('favoritos');
    let favoritosArray = [];

    if (favoritos) {
      favoritosArray = JSON.parse(favoritos);
    }

    // Verifique se o livro já está nos favoritos
    const index = favoritosArray.findIndex((item) => item.id === livro.id);

    if (index !== -1) {
      // Se o livro já estiver nos favoritos, remova-o
      favoritosArray.splice(index, 1);
    } else {
      // Se o livro não estiver nos favoritos, adicione-o
      favoritosArray.push(livro);
    }

    // Atualize a lista de favoritos no AsyncStorage
    await AsyncStorage.setItem('favoritos', JSON.stringify(favoritosArray));
  } catch (error) {
    console.error('Erro ao adicionar/remover dos favoritos:', error);
  }
};

// Função para obter a lista de livros favoritos
export const getFavorites = async () => {
  try {
    const favoritos = await AsyncStorage.getItem('favoritos');
    return favoritos ? JSON.parse(favoritos) : [];
  } catch (error) {
    console.error('Erro ao obter a lista de favoritos:', error);
    return [];
  }
};

export const addFavorite = async (livro) => {
    try {
      // Recupere a lista de favoritos do AsyncStorage
      const favoritos = await AsyncStorage.getItem('favoritos');
      let favoritosArray = [];
  
      if (favoritos) {
        favoritosArray = JSON.parse(favoritos);
      }
  
      // Adicione o livro à lista de favoritos
      favoritosArray.push(livro);
  
      // Atualize a lista de favoritos no AsyncStorage
      await AsyncStorage.setItem('favoritos', JSON.stringify(favoritosArray));
    } catch (error) {
      console.error('Erro ao adicionar aos favoritos:', error);
    }
  };
  
  export const removeFavorite = async (livro) => {
    try {
      // Recupere a lista de favoritos do AsyncStorage
      const favoritos = await AsyncStorage.getItem('favoritos');
      let favoritosArray = [];
  
      if (favoritos) {
        favoritosArray = JSON.parse(favoritos);
      }
  
      // Encontre o índice do livro na lista de favoritos
      const index = favoritosArray.findIndex((item) => item.id === livro.id);
  
      if (index !== -1) {
        // Se o livro estiver nos favoritos, remova-o
        favoritosArray.splice(index, 1);
      }
  
      // Atualize a lista de favoritos no AsyncStorage
      await AsyncStorage.setItem('favoritos', JSON.stringify(favoritosArray));
    } catch (error) {
      console.error('Erro ao remover dos favoritos:', error);
    }
  };
