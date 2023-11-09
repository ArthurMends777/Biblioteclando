import { api } from "../api";

export const useGetData = () => {
    /*
    const login = async (email, senha) => {
        try {
            const response = await api.post('/api/login', { email, senha });
        if (response.status === 200) {
            // Autenticação bem-sucedida
            return { success: true };
        } else if (response.status === 401) {
            // Credenciais inválidas
            return { success: false, error: 'Credenciais inválidas' };
        } else {
            // Outro erro
            return { success: false, error: 'Erro interno do servidor' };
        }
        } catch (error) {
        console.error('Erro ao fazer login:', error);
        return { success: false, error: 'Algo deu errado. Tente novamente mais tarde.' };
        }
    };*/

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
          const response = await api.get('/api/livros/busca/nome', {
            params: {
              searchText,
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

    const fazerEmprestimo = async (idLeitor, idLivro) => {
        try {
          const response = await api.post('/api/emprestimo', { idLeitor, idLivro });
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
      
      
    
    return {
        getNomeGenero,
        getBooksCategory,
        getAutor,
        searchBooks,
        fazerEmprestimo,
        register,
    };
}