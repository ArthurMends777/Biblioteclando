import React , {useState, useEffect}from "react";
import { Container, Header, Text, Div, GoBack, BtnBook } from '../../Components'
import { useGetData } from "../../Services/hooks/useGetData"
import { FlatList, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Category = ({ route }) => {
    const navigation = useNavigation();
    const { getBooksCategory } = useGetData();
    const { category } = route.params;
    const [results, setResults] = useState([]);

    useEffect(() => {
        callGetCategoryResult();
    }, []);
    
    const callGetCategoryResult = async () => {
      const result = await getBooksCategory(category.nome_genero);
      if (!result.error) {
        setResults(result);
      }
    };
    const numberOfColumns = 3;
    return(
        <Container bg="background">
            <Header>
                {category.nome_genero}
            </Header>
            <GoBack />
            <FlatList
                data={results}
                keyExtractor={(item, index) => index.toString()}
                numColumns={numberOfColumns}
                renderItem={({ item }) => (
                <Div>
                    <BtnBook onPress={() => navigation.navigate('Details', { item })}>
                        <Image source={{ uri: item.image_url }} style={{ width: 120, height: 185 }} />
                        <Text size="12" weight="bold" mt={3}>{item.título}</Text>
                    </BtnBook>
                </Div>
                )}
            />
        </Container>
    )
}