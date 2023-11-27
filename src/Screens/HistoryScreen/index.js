import React, { useEffect, useState } from 'react';
import { FlatList, Image, ActivityIndicator } from 'react-native';
import { useAuth } from '../../Contexts/auth';
import { useGetData } from '../../Services/hooks/useGetData';
import { Div, BtnBook, Container, Header, GoBack, Text } from '../../Components'; 
import { useNavigation } from '@react-navigation/native';

export const HistoryScreen = () => {
  const navigation = useNavigation()
  const { infoUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const { getEmprestimosUsuario, bookByEmprest } = useGetData();
  const [emprestimos, setEmprestimos] = useState([]);
  const [livrosInfo, setLivrosInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      if (infoUser) {
        try {
          const data = await getEmprestimosUsuario(infoUser.id_leitor);
          setEmprestimos(data);

          const livroInfoObject = {};

          for (let i = 0; i < data.length; i++) {
            const emprestimo = data[i];
            const livroInfo = await bookByEmprest(emprestimo.id_livro);
            livroInfoObject[emprestimo.id_livro] = livroInfo;
          }

          setLivrosInfo(livroInfoObject);
        } catch (error) {
          console.error('Erro ao buscar empréstimos:', error);
        } finally {
          // Marcar o carregamento como concluído
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [infoUser]);

  const renderItem = ({ item }) => {
    let book = livrosInfo[item.id_livro];
  
    if (book) {
      return (
        <Div>
          <BtnBook>
            <Image
              source={{ uri: livrosInfo[item.id_livro]?.image_url }}
              style={{ width: 120, height: 185 }}
            />
            <Text size={12} weight="bold" mt={3}>
              {book.título}
            </Text>
          </BtnBook>
        </Div>
      );
    } else {
      return (
        <Container bg="background" justify="center" align="center" h={200}>
          <Text size={20}>{infoUser.nome}</Text>
          <Text size={20}> Você não possui nenhum livro em leitura.</Text>
        </Container>
      ); 
    }
  };
  
  return (
    <Container bg="background">
      <Header> Livros em Leitura</Header>
      <GoBack />
      {loading ? (
        <Container bg="background" justify="center" align="center" h={600}>
          <ActivityIndicator  size="large" color="blue" bg="background"/>
        </Container>
      ) : (
        <FlatList
          data={emprestimos}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      )}
    </Container>
  );
};
