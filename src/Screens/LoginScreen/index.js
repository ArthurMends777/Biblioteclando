    import React, {useState, useContext} from 'react';
    import { Container, Text, InputLogin, BtnRegister, BtnLogin } from '../../Components';
    import { Image, ActivityIndicator  } from 'react-native';
    import { useNavigation } from '@react-navigation/native';
    import { AuthContext } from '../../Contexts/auth';

    export const LoginScreen = () => {
        const navigation = useNavigation();
        const { login, error401 } = useContext(AuthContext);

        const [senha, setSenha] = useState('');
        const [email, setEmail] = useState('');
        const [error, setError] = useState('');
        const [loading, setLoading] = useState(false);

        const handleLogin = async () => {
            try {
                console.log('Iniciando o login...');
                setLoading(true);
        
                if (!email.trim() || !senha.trim()) {
                    setError('Preencha todos os campos.');
                    return;
                }
        
                await login(email, senha);
        
                console.log('Login bem-sucedido. Verificando error401:', error401);
        
                if (!error401) {
                    console.log('Redirecionando para HomeA...');
                    navigation.navigate('Home');
                } else {
                    setError('Email e/ou senha incorretos');
                }
            } catch (error) {
                console.error('Erro ao fazer login:', error);
                setError('Algo deu errado. Tente novamente mais tarde.');
            } finally {
                console.log('Finalizando o login...');
                setLoading(false);
            }
        };
        ;

        return (
            <Container align="center" justify="center" bg="background">
                <Image
                    source={require('../../../assets/logo.png')}
                    style={{ width: 200, height: 140 }}
                />
                <Container h={190} bg="background">
                    <InputLogin
                        mt={20}
                        ml={25}
                        placeholder="Email"
                        onChangeText={(text) => setEmail(text)}
                    />

                    <InputLogin
                        mt={20}
                        ml={25}
                        placeholder="Senha"
                        onChangeText={(text) => setSenha(text)}
                        secureTextEntry={true}
                    />

                    <BtnRegister onPress={() => navigation.navigate('Register')}>
                        <Text size={18} color='register'> Registre-se </Text>
                    </BtnRegister>
                </Container>

                <Text color="error" size={18} mb={15} mt={10}> {error} </Text>
                {loading ? (
                    <ActivityIndicator size="large" color="blue" />
                ) : (
                    <BtnLogin w={180} onPress={handleLogin}>
                        <Text color="white">Entrar</Text>
                    </BtnLogin>
                )}
            </Container>
        )
    }