import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importe o AsyncStorage adequado

export const TermsOfService = ({ navigation }) => {
  const acceptTerms = async () => {
    try {
      // Salvar a flag de aceitação nos termos no armazenamento local
      await AsyncStorage.setItem('@acceptedTerms', 'true');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Erro ao aceitar os termos:', error);
    }
  };

  // Verificar se os termos já foram aceitos anteriormente
  useEffect(() => {
    const checkTerms = async () => {
      try {
        const termsAccepted = await AsyncStorage.getItem('@acceptedTerms');
        // Se os termos já foram aceitos, navegue para a tela de login
        if (termsAccepted === 'true') {
          navigation.navigate('Login');
        }
      } catch (error) {
        console.error('Erro ao verificar os termos:', error);
      }
    };

    checkTerms();
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Termos de Uso</Text>
      <Text>Termos importantes aqui...</Text>
      <Button title="Aceitar" onPress={acceptTerms} />
    </View>
  );
};