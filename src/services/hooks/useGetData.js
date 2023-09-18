import { api } from '../api';

export const useGetData = () => {
  const getBooksCategory = async (query) => {
    try {
      const response = await api.get(`/livros/categoria/${query}`);
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
  

  const getUsers = async () => {
    try {
      const response = await api.get(`/usuarios`);
      return response.data;
   
    } catch (error) {
      if (error.response) {
        console.error('Erro ao buscar dados da API:', error.response);
      } else {
        console.error('Erro ao buscar dados da API:', error.message);
      }
      return [];
    }
  };

  
  
  return {
    getBooksCategory,
    getUsers,
  };
};
