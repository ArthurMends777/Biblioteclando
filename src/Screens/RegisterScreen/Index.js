import React, { useState } from "react";
import { Container, Text, InputRegister, BtnGetRegister } from '../../Components';
import { useGetData } from "../../Services/hooks/useGetData";

export const RegisterScreen = () => {
  const { register } = useGetData();

  const [formData, setFormData] = useState({
    nome: "",
    Endereço: "",
    senha: "",
    telefone: "",
    email: "",
    CPF: ""
  });

  const [registrationStatus, setRegistrationStatus] = useState(null);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    const response = await register(formData);
    setRegistrationStatus(response);
  };

  return (
    <Container bg="background" align="center" justify="center">
      <InputRegister
        type="text"
        name="nome"
        value={formData.nome}
        placeholder="Nome"
        onChangeText={(text) => handleChange("nome", text)}
      />
      <InputRegister
        type="text"
        name="Endereço"
        value={formData.Endereço}
        placeholder="Endereço"
        onChangeText={(text) => handleChange("Endereço", text)}
      />
      <InputRegister
        type="password"
        name="senha"
        value={formData.senha}
        placeholder="Senha"
        onChangeText={(text) => handleChange("senha", text)}
      />
      <InputRegister
        type="text"
        name="telefone"
        value={formData.telefone}
        placeholder="Telefone"
        onChangeText={(text) => handleChange("telefone", text)}
      />
      <InputRegister
        type="email"
        name="email"
        value={formData.email}
        placeholder="Email"
        onChangeText={(text) => handleChange("email", text)}
      />
      <InputRegister
        type="text"
        name="CPF"
        value={formData.CPF}
        placeholder="CPF"
        onChangeText={(text) => handleChange("CPF", text)}
      />
        <BtnGetRegister onPress={handleSubmit}>
          <Text color="white">
            Cadastrar
          </Text>  
        </BtnGetRegister>
      {registrationStatus && (
        <Text>
          {registrationStatus.success
            ? "Usuário cadastrado com sucesso"
            : "Erro ao cadastrar"}
        </Text>
      )}
    </Container>
  );
};
