import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../Services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [infoUser, setInfoUser] = useState()
  const [error401, setError401] = useState();
  
  useEffect(() => {
    checkUser();
  }, []);
  
  const login = async (email, senha) => {
    try {
  
      const response = await api.post('/api/login', { email, senha });
  
      if (response.status === 200) {
        console.log('Login bem-sucedido. Atualizando informações do usuário...');
  
        const userData = response.data.userData;
        const userIdString = JSON.stringify(userData.id_leitor);
  
        await AsyncStorage.setItem('userID', userIdString);
        await setInfoUser(userData);
  
      } else if (response.status === 401) {
        setError401(true);
      } else {
        console.error('Erro ao fazer login:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError401(false); // Considerar se deve ser definido como true ou não em casos de erro
    } finally {
      console.log('Finalizando o login...');
    }
  };
  
  const logout = async () => {
    setInfoUser();
    await AsyncStorage.removeItem('userID');
  };

  const checkUser = async () => {
    const storedUserID = await AsyncStorage.getItem('userID');
    if (storedUserID) {
      try {
        const response = await api.get(`/api/leitor/${storedUserID}`); 
        if (response.status === 200) {
          const leitorInfo = response.data;
          setInfoUser(leitorInfo);
        } else {
          console.log('Error')
        }
      } catch (error) {
        console.error('Erro ao buscar informações do leitor:', error);
      }
    }
  };
  return (
    <AuthContext.Provider value={{ login, logout, error401, infoUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};