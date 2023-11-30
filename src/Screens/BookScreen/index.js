import React, { useEffect, useState } from 'react';
import { FlatList, Image, ActivityIndicator } from 'react-native';
import { useGetData } from '../../Services/hooks/useGetData';
import { Header, Container, Text, GoBack } from '../../Components';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from "../../Contexts/auth"


export const LivrosHistoryScreen = () => {
    const navigation = useNavigation();
    const { infoUser } = useAuth();
    const { getLivrosAtrasados } = useGetData();
    const [loading, setLoading] = useState(true);
    const [livrosAtrasados, setLivrosAtrasados] = useState([]);
    const id = infoUser.id_leitor

    useEffect(() => {
        const fetchLivrosAtrasados = async () => {
        try {
            const livrosAtrasadosData = await getLivrosAtrasados(id);
            setLivrosAtrasados(livrosAtrasadosData);
        } catch (error) {
            console.error('Erro ao buscar livros atrasados:', error);
        } finally {
            setLoading(false);
        }
        };

        fetchLivrosAtrasados();
    }, [id, getLivrosAtrasados]);

    return (
        <Container bg="background">
        <Header>Histórico de leitura</Header>
        <GoBack />
        {loading ? (
            <Container bg="background" justify="center" align="center" h={600}>
                <ActivityIndicator  size="large" color="blue" bg="background"/>
            </Container>
        ) : (
            livrosAtrasados.length === 0 ? (
            <Text size={18} mt={20} ml={15}>Nenhum livro foi lido ainda.</Text>
            ) : (
            <FlatList
                data={livrosAtrasados}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Div>
                        <BtnBook onPress={() => navigation.navigate('Details', { item })}>
                            <Image source={{ uri: item.image_url }} style={{ width: 120, height: 185 }} />
                            <Text size="12" weight="bold" mt={3}>{item.título}</Text>
                        </BtnBook>
                    </Div>
                )}
            />
            )
        )}
        </Container>
    );
};