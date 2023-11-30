import React, { useState } from "react";
import { ScreenScrollContainer, Text, InputRegister, BtnGetRegister, ContainerSafe } from '../../Components';
import { useGetData } from "../../Services/hooks/useGetData";
import { ActivityIndicator } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export const RegisterScreen = () => {
  const navigation = useNavigation();
  const { register } = useGetData();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    nome: "",
    Endereço: "",
    senha: "",
    telefone: "",
    email: "",
    CPF: ""
  });

  const [confirmSenha, setConfirmSenha] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleConfirmSenhaChange = (text) => {
    setConfirmSenha(text);
  };

  const isValidCPF = (cpf) => {
    // Validação de CPF utilizando uma expressão regular
    const cpfRegex = /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/;
    return cpfRegex.test(cpf);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const { nome, Endereço, senha, telefone, email, CPF } = formData;

      // Verifica se algum campo está vazio
      if (!nome || !Endereço || !senha || !telefone || !email || !CPF) {
        setError('Preencha todos os campos.');
        return;
      }

      // Verifica se as senhas coincidem
      if (senha !== confirmSenha) {
        setError('As senhas não coincidem.');
        return;
      }

      // Validação do CPF
      if (!isValidCPF(CPF)) {
        setError('CPF inválido. Insira no formato 111.111.111-11.');
        return;
      }

      // Restante do código para realizar o registro...
      const response = await register(formData);
      navigation.navigate('Home');
      setRegistrationStatus(response);
    } catch (error) {
      setError('Erro ao cadastrar. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenScrollContainer bg="background" align="center" justify="center">
      <ContainerSafe h={740} bg="background" align="center"  mt={80}>
        <Text ml={-230} size={20}> Nome: </Text>
        <InputRegister
          type="text"
          name="nome"
          value={formData.nome}
          placeholder="Nome"
          onChangeText={(text) => handleChange("nome", text)}
        />
        <Text ml={-220} size={20}> Endereço: </Text>
        <InputRegister
          type="text"
          name="Endereço"
          value={formData.Endereço}
          placeholder="Ex: Rua das flores, Bairro: jardim"
          onChangeText={(text) => handleChange("Endereço", text)}
        />
        <Text ml={-240} size={20}> Senha: </Text>
        <InputRegister
          type="password"
          name="senha"
          value={formData.senha}
          placeholder="Senha"
          onChangeText={(text) => handleChange("senha", text)}
          secureTextEntry
        />
        <Text ml={-150} size={20}> Confirme a senha: </Text>
        <InputRegister
          type="password"
          name="confirmSenha"
          value={confirmSenha}
          placeholder="Digite sua senha novamente"
          onChangeText={handleConfirmSenhaChange}
          secureTextEntry
        />
        <Text ml={-220} size={20}> Telefone: </Text>
        <InputRegister
          type="text"
          name="telefone"
          value={formData.telefone}
          placeholder="Ex: (**) *****-****"
          onChangeText={(text) => handleChange("telefone", text)}
        />
        <Text ml={-235} size={20}> E-mail: </Text>
        <InputRegister
          type="email"
          name="email"
          value={formData.email}
          placeholder="seuemail@email.com"
          onChangeText={(text) => handleChange("email", text)}
        />
        <Text ml={-250} size={20}> CPF: </Text>
        <InputRegister
          type="text"
          name="CPF"
          value={formData.CPF}
          placeholder="111.111.111-11"
          onChangeText={handleCPFFormat} 
        />
        
        <BtnGetRegister onPress={handleSubmit}>
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text color="white">
              Cadastrar
            </Text>
          )}
        </BtnGetRegister>

        
        {error && (
          <Text color="error">
            {error}
          </Text>
        )}
        {registrationStatus && (
          <Text color="error" size={15} mt={10}>
            {registrationStatus.success
              ? "Usuário cadastrado com sucesso"
              : "Erro ao cadastrar, Tente novamente mais tarde"}
          </Text>
        )}
      </ContainerSafe>
    </ScreenScrollContainer>
  );
};
