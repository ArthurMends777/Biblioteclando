import React, {useState} from "react";
import { Container, Header, GoBack, InputLogin, Text, BtnReserv} from "../../Components";
import { useAuth } from "../../Contexts/auth";
import { useGetData } from "../../Services/hooks/useGetData";

export const LoanBook = () => {
    const { infoUser } = useAuth();
    const idLeitor = infoUser.id_leitor;
    const { fazerEmprestimo } = useGetData();

    const [livroId, setLivroId] = useState("");
    const [resultado, setResultado] = useState(null);

    const handleEmprestimo = async () => {
        const response = await fazerEmprestimo(idLeitor, livroId);
        setResultado(response);
    };

    return (
        <Container bg="background">
            <Header>EMPRÉSTIMO</Header>
            <GoBack />
            <Text size={20}>Preencha o ID do livro que deseja emprestar:</Text>
            <InputLogin
                placeholder="ID do livro"
                value={livroId}
                onChangeText={(text) => setLivroId(text)}
            />

            <BtnReserv onPress={handleEmprestimo}>
                <Text>Realizar empréstimo</Text>
            </BtnReserv>

            {resultado && (
                <Text>
                    {resultado.success
                        ? "Empréstimo bem-sucedido!"
                        : "Erro"}
                </Text>
            )}
        </Container>
    );
}