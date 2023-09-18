import React, { useEffect } from 'react'
import { Text, View, StyleSheet} from 'react-native'

export const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login')
    }, 1000)
  }, [navigation])

  return (
    <View style={styles.container}>
      <Text> App Biblioteclando </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});