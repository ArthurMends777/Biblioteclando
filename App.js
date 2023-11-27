import React from 'react';
import Routes from './src/routes';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/styles/theme';
import { AuthProvider } from './src/Contexts/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogBox } from 'react-native';


//LogBox.ignoreAllLogs(true);
async function limparAsyncStorage() {
  try {
    await AsyncStorage.clear();
    console.log('Dados do AsyncStorage apagados com sucesso');
  } catch (error) {
    console.error('Erro ao apagar os dados do AsyncStorage:', error);
  }
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}