import React, { useEffect } from 'react';
import { Button } from 'react-native';
import { Header, ScreenScrollContainer, Container, Text } from '../../Components';
import { Para, Btn } from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export const TermsOfService = () => {
  const navigation = useNavigation();
  const acceptTerms = async () => {
    try {
      await AsyncStorage.setItem('@acceptedTerms', 'true');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Erro ao aceitar os termos:', error);
    }
  };

  useEffect(() => {
    const checkTerms = async () => {
      try {
        const termsAccepted = await AsyncStorage.getItem('@acceptedTerms');
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
    <ScreenScrollContainer bg="background">
      <Header></Header>
      <Container bg="background" align="center" >
        <Text weight="bold">Política de Privacidade</Text>
        <Para>
            <Text size={20} mb={10}>
              Na InfoCervo Tecnologia e Gestão para Bibliotecas Ltda , privacidade e segurança são prioridades e nos comprometemos com a transparência do tratamento de dados pessoais dos nossos usuários/clientes. Por isso, esta presente Política de Privacidade estabelece como é feita a coleta, uso e transferência de informações de clientes ou outras pessoas que acessam ou usam nosso site.
            </Text>

            <Text size={20} mb={10}>
              Ao utilizar nossos serviços, você entende que coletaremos e usaremos suas informações pessoais nas formas descritas nesta Política, sob as normas da Constituição Federal de 1988 (art. 5º, LXXIX; e o art. 22º, XXX – incluídos pela EC 115/2022), das normas de Proteção de Dados (LGPD, Lei Federal 13.709/2018), das disposições consumeristas da Lei Federal 8078/1990 e as demais normas do ordenamento jurídico brasileiro aplicáveis.
            </Text>

            <Text size={20} mb={10}>
              Dessa forma, a InfoCervo Tecnologia e Gestão para Bibliotecas Ltda , doravante denominada simplesmente como “Biblioteclando”, inscrita no CNPJ/MF sob o nº 41.170.151/0001-75, no papel de Controladora de Dados, obriga-se ao disposto na presente Política de Privacidade.
            </Text>

            <Text size={20} mb={10} weight="bold">
              1. Quais dados coletamos sobre você e para qual finalidade?
            </Text>

            <Text size={20} mb={10}>
              Nosso site coleta e utiliza alguns dados pessoais seus, de forma a viabilizar a prestação de serviços e aprimorar a experiência de uso.
            </Text>

            <Text size={20} mb={10} weight="bold">
              1.1. Dados pessoais fornecidos pelo titular
            </Text>

            <Text size={20} mb={5}>
              CPF – Para realizar cadastro e reconhecimento da pessoa que utiliza o sistema.
            </Text>

            <Text size={20} mb={5}>
              Telefone – Para entrar em contato caso atrase a devolução do livro, ou não        faça a devolução
            </Text>
            <Text size={20} mb={10}>
              Endereço – Para realizar cadastro e reconhecimento da pessoa que utiliza o sistema
            </Text>

            <Text size={20} mb={10} weight="bold">
              1.2. Dados pessoais coletados automaticamente
            </Text>

            <Text size={20} mb={10}>
              Identificadores de dispositivo – ID do dispositivo, de publicidade e informações do sistema operacional, pelo motivo de garantir a segurança da conta, possibilitando personalizar a experiência do usuário e fornecer referentes a compatibilidade do dispositivo com o nosso aplicativo.
            </Text>

            <Text size={20} mb={10}>
            Informações de Conexão: Coletamos informações sobre a sua conexão com a internet, como tipo de conexão (Wi-Fi, dados móveis), provedor de serviço e qualidade da conexão.
            </Text>

            <Text size={20} mb={10} weight="bold">
            2. Como coletamos os seus dados?

            </Text>

            <Text size={20} mb={5}>
              Nesse sentido, a coleta dos seus dados pessoais ocorre da seguinte forma:
            </Text>

            <Text size={20} mb={5}>
              Registro de  conta: Durante o processo de registro são coletados o nome, o endereço, a senha, número de telefone, email e data de nascimento.
            </Text>

            <Text size={20} mb={10}>
              Consultas de busca: As consultas de busca efetuadas durante a navegação são coletadas para melhoria do mecanismo de busca além de trazer facilidade na busca de livros novos.
            </Text>

            <Text size={20} mb={10} weight="bold">
              2.1. Consentimento
            </Text>

            <Text size={20} mb={10}>
            É a partir do seu consentimento que tratamos os seus dados pessoais. O consentimento é a manifestação livre, informada e inequívoca pela qual você autoriza a InfoCervo Tecnologia e Gestão para Bibliotecas Ltda  a tratar seus dados.

            </Text>

            <Text size={20} mb={10}>
            Assim, em consonância com a Lei Geral de Proteção de Dados, seus dados só serão coletados, tratados e armazenados mediante prévio e expresso consentimento. 

            </Text>
            <Text size={20} mb={10}>
            O seu consentimento será obtido de forma específica para cada finalidade acima descrita, evidenciando o compromisso de transparência e boa-fé da Biblioteclando para com seus usuários/clientes, seguindo as regulações legislativas pertinentes.

            </Text>
            <Text size={20} mb={10}>
            Ao utilizar os serviços da InfoCervo Tecnologia e Gestão para Bibliotecas Ltda  e fornecer seus dados pessoais, você está ciente e consentindo com as disposições desta Política de Privacidade, além de conhecer seus direitos e como exercê-los.

            </Text>
            <Text size={20} mb={10}>
            A qualquer tempo e sem nenhum custo, você poderá revogar seu consentimento.

            </Text>
            <Text size={20} mb={10}>
            É importante destacar que a revogação do consentimento para o tratamento dos dados pode implicar a impossibilidade da performance adequada de alguma funcionalidade do site que dependa da operação. Tais consequências serão informadas previamente.
            </Text>

            <Text size={20} mb={10} weight="bold">
            3. Quais são os seus direitos?
            </Text>

            <Text size={20} mb={5}>
              A InfoCervo Tecnologia e Gestão para Bibliotecas Ltda  assegura a seus usuários/clientes seus direitos de titular previstos no artigo 18 da Lei Geral de Proteção de Dados. Dessa forma, você pode, de maneira gratuita e a qualquer tempo:
            </Text>

            <Text size={20} mb={5}>
            Confirmar a existência de tratamento de dados, de maneira simplificada ou em formato claro e completo.

            </Text>

            <Text size={20} mb={5}>
            Acessar seus dados, podendo solicitá-los em uma cópia legível sob forma impressa ou por meio eletrônico, seguro e idôneo.

            </Text>

            <Text size={20} mb={5}>
            Corrigir seus dados, ao solicitar a edição, correção ou atualização destes.

            </Text>

            <Text size={20} mb={5}>
            Limitar seus dados quando desnecessários, excessivos ou tratados em desconformidade com a legislação através da anonimização, bloqueio ou eliminação.

            </Text>

            <Text size={20} mb={5}>
            Solicitar a portabilidade de seus dados, através de um relatório de dados cadastrais que a Biblioteclando trata a seu respeito.

            </Text>

            <Text size={20} mb={5}>
            Eliminar seus dados tratados a partir de seu consentimento, exceto nos casos previstos em lei.

            </Text>

            <Text size={20} mb={5}>
            Revogar seu consentimento, desautorizando o tratamento de seus dados.

            </Text>

            <Text size={20} mb={10}>
            Informar-se sobre a possibilidade de não fornecer seu consentimento e sobre as consequências da negativa.
            </Text>

            <Text size={20} mb={10} weight="bold">
            4. Como você pode exercer seus direitos de titular?
            </Text>

            <Text size={20} mb={10}>
            Para exercer seus direitos de titular, você deve entrar em contato com a InfoCervo Tecnologia e Gestão para Bibliotecas Ltda  através do email:
            </Text>

            <Text size={20} mb={10} weight="bold">
            biblioteclando001@gmail.com
            </Text>

            <Text size={20} mb={10}>
            De forma a garantir a sua correta identificação como titular dos dados pessoais objeto da solicitação, é possível que solicitemos documentos ou demais comprovações que possam comprovar sua identidade. Nessa hipótese, você será informado previamente.
            </Text>

            <Text size={20} mb={10} weight="bold">
              5. Como e por quanto tempo seus dados serão armazenados?
            </Text>

            <Text size={20} mb={10}>
            Seus dados pessoais coletados pela InfoCervo Tecnologia e Gestão para Bibliotecas Ltda  serão utilizados e armazenados durante o tempo necessário para a prestação do serviço ou para que as finalidades elencadas na presente Política de Privacidade sejam atingidas, considerando os direitos dos titulares dos dados e dos controladores.

            </Text>

            <Text size={20} mb={10}>
            De modo geral, seus dados serão mantidos enquanto a relação contratual entre você e a InfoCervo Tecnologia e Gestão para Bibliotecas Ltda  perdurar. Findado o período de armazenamento dos dados pessoais, estes serão excluídos de nossas bases de dados ou anonimizados, ressalvadas as hipóteses legalmente previstas no artigo 16 lei geral de proteção de dados, a saber:
            </Text>

            <Text size={20} mb={10}>
            I – cumprimento de obrigação legal ou regulatória pelo controlador;

            </Text>

            <Text size={20} mb={10}>
            II – estudo por órgão de pesquisa, garantida, sempre que possível, a anonimização dos dados pessoais;

            </Text>

            <Text size={20} mb={10}>
            III – transferência a terceiro, desde que respeitados os requisitos de tratamento de dados dispostos nesta Lei; ou

            </Text>

            <Text size={20} mb={10}>
            IV – uso exclusivo do controlador, vedado seu acesso por terceiro, e desde que anonimizados os dados.

            </Text>

            <Text size={20} mb={10}>
            Isto é, informações pessoais sobre você que sejam imprescindíveis para o cumprimento de determinações legais, judiciais e administrativas e/ou para o exercício do direito de defesa em processos judiciais e administrativos serão mantidas, a despeito da exclusão dos demais dados. 

            </Text>

            <Text size={20} mb={10}>
            O armazenamento de dados coletados pela InfoCervo Tecnologia e Gestão para Bibliotecas Ltda  reflete o nosso compromisso com a segurança e privacidade dos seus dados. Empregamos medidas e soluções técnicas de proteção aptas a garantir a confidencialidade, integridade e inviolabilidade dos seus dados. Além disso, também contamos com medidas de segurança apropriadas aos riscos e com controle de acesso às informações armazenadas.
            </Text>

            <Text size={20} mb={10} weight="bold">
            6. O que fazemos para manter seus dados seguros?
            </Text>

            <Text size={20} mb={10}>
            Para mantermos suas informações pessoais seguras, usamos ferramentas físicas, eletrônicas e gerenciais orientadas para a proteção da sua privacidade.
            </Text>

            <Text size={20} mb={10}>
            Aplicamos essas ferramentas levando em consideração a natureza dos dados pessoais coletados, o contexto e a finalidade do tratamento e os riscos que eventuais violações gerariam para os direitos e liberdades do titular dos dados coletados e tratados.

            </Text>

            <Text size={20} mb={10}>
            Entre as medidas que adotamos, destacamos as seguintes:
            </Text>

            <Text size={20} mb={10}>
            Apenas pessoas autorizadas têm acesso a seus dados pessoais

            </Text>

            <Text size={20} mb={10}>
            O acesso a seus dados pessoais é feito somente após o compromisso de confidencialidade

            </Text>

            <Text size={20} mb={10}>
            Seus dados pessoais são armazenados em ambiente seguro e idôneo.

            </Text>

            <Text size={20} mb={10}>
            A InfoCervo Tecnologia e Gestão para Bibliotecas Ltda  se compromete a adotar as melhores posturas para evitar incidentes de segurança. Contudo, é necessário destacar que nenhuma página virtual é inteiramente segura e livre de riscos. É possível que, apesar de todos os nossos protocolos de segurança, problemas de culpa exclusivamente de terceiros ocorram, como ataques cibernéticos de hackers, ou também em decorrência da negligência ou imprudência do próprio usuário/cliente.

            </Text>

            <Text size={20} mb={10}>
            Em caso de incidentes de segurança que possa gerar risco ou dano relevante para você ou qualquer um de nossos usuários/clientes, comunicaremos aos afetados e a Autoridade Nacional de Proteção de Dados sobre o ocorrido, em consonância com as disposições da Lei Geral de Proteção de Dados.

            </Text>

            <Text size={20} mb={10} weight="bold">
            7. Com quem seus dados podem ser compartilhados?

            </Text>

            <Text size={20} mb={10}>
            Tendo em vista a preservação de sua privacidade, a InfoCervo Tecnologia e Gestão para Bibliotecas Ltda  não compartilhará seus dados pessoais com nenhum terceiro não autorizado. 

            </Text>

            <Text size={20} mb={10}>
            No caso de um terceiro autorizado, estes recebem seus dados apenas na medida do necessário para a prestação dos serviços contratados e nossos contratos são orientados pelas normas de proteção de dados do ordenamento jurídico brasileiro.

            </Text>

            <Text size={20} mb={10}>
            Além disso, também existem outras hipóteses em que seus dados poderão ser compartilhados, que são:

            </Text>

            <Text size={20} mb={10}>
            I – Determinação legal, requerimento, requisição ou ordem judicial, com autoridades judiciais, administrativas ou governamentais competentes.

            </Text>

            <Text size={20} mb={10}>
            II – Caso de movimentações societárias, como fusão, aquisição e incorporação, de forma automática

            </Text>

            <Text size={20} mb={10}>
            III – Proteção dos direitos da Biblioteclando em qualquer tipo de conflito, inclusive os de teor judicial.
            </Text>

            <Text size={20} mb={10} weight="bold">
            8. Alteração desta Política de Privacidade
            </Text>

            <Text size={20} mb={10}>
            A atual versão da Política de Privacidade foi formulada e atualizada pela última vez em: 17 de novembro de 2023.

            </Text>

            <Text size={20} mb={10}>
            Reservamos o direito de modificar essa Política de Privacidade a qualquer tempo, principalmente em função da adequação a eventuais alterações feitas em nosso site ou em âmbito legislativo. Recomendamos que você a revise com frequência.

            </Text>

            <Text size={20} mb={10}>
            Eventuais alterações entrarão em vigor a partir de sua publicação em nosso site e sempre lhe notificaremos acerca das mudanças ocorridas.

            </Text>

            <Text size={20} mb={10}>
            Ao utilizar nossos serviços e fornecer seus dados pessoais após tais modificações, você as consente. 

            </Text>

            <Text size={20} mb={10} weight="bold">
            9. Responsabilidade

            </Text>

            <Text size={20} mb={10}>
            A InfoCervo Tecnologia e Gestão para Bibliotecas Ltda  prevê a responsabilidade dos agentes que atuam nos processos de tratamento de dados, em conformidade com os artigos 42 ao 45 da Lei Geral de Proteção de Dados.

            </Text>

            <Text size={20} mb={10}>
            Nos comprometemos em manter esta Política de Privacidade atualizada, observando suas disposições e zelando por seu cumprimento.

            </Text>

            <Text size={20} mb={10}>
            Além disso, também assumimos o compromisso de buscar condições técnicas e organizativas seguramente aptas a proteger todo o processo de tratamento de dados.

            </Text>

            <Text size={20} mb={10}>
            Caso a Autoridade Nacional de Proteção de Dados exija a adoção de providências em relação ao tratamento de dados realizado pela InfoCervo Tecnologia e Gestão para Bibliotecas Ltda, comprometemo-nos a segui-las. 

            </Text>

            <Text size={20} mb={10} weight="bold">
            10. Isenção de responsabilidade

            </Text>

            <Text size={20} mb={10}>
            Conforme mencionado no Tópico 6, embora adotemos elevados padrões de segurança a fim de evitar incidentes, não há nenhuma página virtual inteiramente livre de riscos. Nesse sentido, a InfoCervo Tecnologia e Gestão para Bibliotecas Ltda  não se responsabiliza por:

            </Text>

            <Text size={20} mb={10}>
            I – Quaisquer consequências decorrentes da negligência, imprudência ou imperícia dos usuários em relação a seus dados individuais. Garantimos e nos responsabilizamos apenas pela segurança dos processos de tratamento de dados e do cumprimento das finalidades descritas no presente instrumento.

            </Text>

            <Text size={20} mb={10}>
            Destacamos que a responsabilidade em relação à confidencialidade dos dados de acesso é do usuário.

            </Text>

            <Text size={20} mb={10}>
            II – Ações maliciosas de terceiros, como ataques de hackers, exceto se comprovada conduta culposa ou deliberada da Biblioteclando.

            </Text>

            <Text size={20} mb={10}>
            Destacamos que em caso de incidentes de segurança que possam gerar risco ou dano relevante para você ou qualquer um de nossos usuários/clientes, comunicaremos aos afetados e a Autoridade Nacional de Proteção de Dados sobre o ocorrido e cumpriremos as providências necessárias.

            </Text>

            <Text size={20} mb={10}>
            III – Inveracidade das informações inseridas pelo usuário/cliente nos registros necessários para a utilização dos serviços da Biblioteclando; quaisquer consequências decorrentes de informações falsas ou inseridas de má-fé são de inteiramente responsabilidade do usuário/cliente.
            </Text>
            
            <Text size={20} mb={10} weight="bold">
            11. Encarregado de Proteção de Dados

            </Text>

            <Text size={20} mb={10}>
            A InfoCervo Tecnologia e Gestão para Bibliotecas Ltda  disponibiliza os seguintes meios para que você possa entrar em contato conosco para exercer seus direitos de titular: biblioteclando001@gmail.com.

            </Text>

            <Text size={20} mb={10}>
            Caso tenha dúvidas sobre esta Política de Privacidade ou sobre os dados pessoais que tratamos, você pode entrar em contato com o nosso Encarregado de Proteção de Dados Pessoais, através dos seguintes canais:

            </Text>

            <Text size={20} mb={10} weight="bold">
            Gabriel Rodrigues Terada 

            </Text>

            <Text size={20} mb={10} weight="bold">
            gabrterada@gmail.com

            </Text>
        </Para>

        <Btn onPress={acceptTerms}>
          <Text color="white"> Aceitar os termos </Text>
        </Btn>
      </Container>
    </ScreenScrollContainer>
  );
};