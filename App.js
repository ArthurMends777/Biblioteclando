import React from "react";
import { Routes } from "./src/routes";
import { ThemeProvider } from "styled-components";
import { theme } from './src/styles/theme';
import { AuthProvider } from "./src/Contexts/auth";
import { LogBox } from 'react-native';

/*
import AsyncStorage from '@react-native-async-storage/async-storage';
async function limparAsyncStorage() {
  try {
    await AsyncStorage.clear();
    console.log('Dados do AsyncStorage apagados com sucesso');
  } catch (error) {
    console.error('Erro ao apagar os dados do AsyncStorage:', error);
  }
}
limparAsyncStorage()
*/

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}