import { api } from "../api";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const useGetData = () => {
    const getNomeGenero = async () => {
        try {
            const response = await api.get(`/api/categorias`);
            if (response.status === 200) {
                return response.data;
            } else {
                return null;
            }
        } catch (error) {
            console.error('Erro ao buscar o nome do gênero:', error);
            return null; 
        }
    };

    const getBooksCategory = async (query) => {
        try {
            const response = await api.get(`/api/livros/categoria/${query}`);
            const data = response.data;
        
            return data;
        } catch (error) {
            if (error.response) {
                console.error('Erro ao buscar dados da API:', error.response);
            } else {
                console.error('Erro ao buscar dados da API:', error.message);
            }
            return [];
        }
    };

    const getAutor = async (query) => {
        try {
            const response = await api.get(`/api/autor/${query}`);
            const data = response.data;

            return data;
        } catch (error) {
            if (error.response) {
                console.error('Erro ao buscar dados da API:', error.response);
            } else {
                console.error('Erro ao buscar dados da API:', error.message);
            }
            return [];
        }
    };

    const searchBooks = async (searchText) => {
      try {
        const response = await api.get('/api/livros/busca', {
          params: {
            nome: searchText,
          },
        });
    
        if (response.status === 200) {
          return response.data;
        } else {
          return [];
        }
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
        return [];
      }
    };
    
    const register = async (userData) => {
      try {
        const response = await api.post('/api/usuarios', userData);
        
        if (response.status === 201) {
          return { success: true, message: 'Usuário cadastrado com sucesso' };
        } else if (response.status === 500) { 
          return { success: false, error: 'Erro do servidor' };
        } else {
          return { success: false, error: 'Resposta inesperada do servidor' };
        }
      } catch (error) {
        console.log('Erro ao cadastrar', error);
        return { success: false, error: 'Algo deu errado, tente novamente' };
      }
    };

    const fazerEmprestimo = async (idLeitor, idLivro, idFuncionario) => {
      try {
        const response = await api.post('/api/emprestimo', { idLeitor, idLivro, idFuncionario });
        
        if (response.status === 201) {
          return { success: true };
        } else if (response.status === 400) {
          return { success: false, error: 'Livro já emprestado' };
        } else {
          return { success: false, error: 'Erro interno do servidor' };
        }
      } catch (error) {
        console.error('Erro ao fazer empréstimo:', error);
        return { success: false, error: 'Algo deu errado. Tente novamente mais tarde.' };
      }
    };

    const getEmprestimosUsuario = async (idLeitor) => {
      try {
        const response = await api.get(`/api/emprestimos/${idLeitor}`);
        if (response.status === 200) {
          return response.data;
        } else {
          return [];
        }
      } catch (error) {
        console.error('Erro ao buscar empréstimos do usuário:', error);
        return [];
      }
    };

    
    const bookByEmprest = async (idLivro) => {
      try {
        const response = await api.get(`/api/livros/${idLivro}`);
        console.log(response.data)

        if (response.status == 200) {
          return response.data;
        } else {
          return []
        }
      } catch (error) {
        console.log('Erro ao buscar as informações do livro');
        return { success: false, error: 'Algo deu errado, tente novamente' };
      }
    };

    const getLivrosAtrasados = async (idLeitor) => {
      try {
          const response = await api.get(`/api/livros-atrasados/${idLeitor}`);
          if (response.status === 200) {
              return response.data;
          } else {
              return [];
          }
      } catch (error) {
          console.error('Erro ao buscar livros atrasados:', error);
          return [];
      }
    };

    const getFavoriteBooksDetails = async (id_leitor) => {
      try {
        const favoritos = await AsyncStorage.getItem(`favoriteBooks_${id_leitor}`);
        if (favoritos) {
          const favoritosArray = JSON.parse(favoritos);
    
          // Array para armazenar os detalhes completos dos livros favoritos
          let favoriteBooksDetails = [];
    
          // Itera sobre os IDs dos livros favoritos para buscar seus detalhes na API
          for (let livroId of favoritosArray) {

            const response = await api.get(`/api/livros/${livroId}`);
            if (response.status === 200) {
              favoriteBooksDetails.push(response.data);
            } else {
              console.error('Erro ao buscar detalhes do livro:', response.status);
            }
          }
    
          return favoriteBooksDetails;
        } else {
          return [];
        }
      } catch (error) {
        console.error('Erro ao buscar detalhes dos livros favoritos:', error);
        return [];
      }
    };

    const isBookBorrowed = async (idLeitor, idLivro) => {
      try {
        const response = await api.get(`/api/emprestimo/${idLeitor}/${idLivro}`);
        
        if (response.status === 200) {
          // Se o livro estiver emprestado (status 200), retorna true
          return true;
        } else if (response.status === 404) {
          // Se o livro não estiver emprestado (status 404), retorna false
          return false;
        } else {
          console.error('Erro ao verificar se o livro está emprestado:', response.status);
          return false;
        }
      } catch (error) {
        console.error('Erro ao verificar se o livro está emprestado:', error);
        return false;
      }
    };
      
    
    return {
        getNomeGenero,
        getBooksCategory,
        getAutor,
        searchBooks,
        fazerEmprestimo,
        getEmprestimosUsuario,
        register,
        bookByEmprest,
        getLivrosAtrasados,
        getFavoriteBooksDetails,
        isBookBorrowed,
    };
}