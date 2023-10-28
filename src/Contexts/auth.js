import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../Services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [infoUser, setInfoUser] = useState('')
  const [error401, setError401] = useState(false);

  useEffect(() => {
    checkUser();
  }, []);

  const login = async (email, senha) => {
    try {
      const response = await api.post('/api/login', { email, senha });

      if (response.status === 200) {
        const userData = response.data;
        setInfoUser(userData.nome)
        const randomToken = generateRandomToken(32); 
        setUserToken(randomToken);
        console.log(userToken)
        await AsyncStorage.setItem('userToken', randomToken);

      } else if (response.status === 401) {
        setError401(true);
      } else {
        console.error('Erro ao fazer login:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError401(false);
    }
  };

  const logout = async () => {
    setUserToken(null);
    await AsyncStorage.removeItem('userToken');
  };

  const checkUser = async () => {
    const storedUserToken = await AsyncStorage.getItem('userToken');
    if (storedUserToken) {
      setUserToken(storedUserToken);
    }
  };

  return (
    <AuthContext.Provider value={{ userToken, login, logout, error401, infoUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

// Função para gerar um token aleatório
const generateRandomToken = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
