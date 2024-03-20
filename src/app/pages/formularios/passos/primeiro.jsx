import React from "react";
import styles from "./primeiro.module.sass";
import { TextField } from "@mui/material";

const Passo1 = ({ dados, setDados }) => {
  const [ceperror, setCepError] = React.useState(null);

  // Inicializa o campo de CEP como uma string vazia
  if (dados.cep === undefined) {
    setDados.setCep('');
  }

  const AdicionarCep = (e) => {
    let cep = e.target.value.replace(/\D/g, "");
    cep = cep.slice(0, 8);
    setDados.setCep(cep);
  };

  async function pegarCep() {
    if (dados.cep.length !== 8) {
      setCepError(null);
    } else {
      try {
        const res = await fetch(`https://viacep.com.br/ws/${dados.cep}/json/`);
        if (!res.ok) {
          setCepError("Cep não encontrado!");
        } else {
          const responseCep = await res.json();
          if (responseCep.erro) {
            setCepError("Cep não encontrado!");
          } else {
            setDados.setLogradouro(responseCep.logradouro);
            setDados.setBairro(responseCep.bairro);
            setDados.setCidade(responseCep.localidade);
            setCepError(null);
          }
        }
      } catch (error) {
        console.error("Erro ao buscar o CEP:", error);
        setCepError("Ocorreu um erro ao buscar o CEP.");
        setDados.setCep(""); // Define o valor do CEP como vazio em caso de erro
      }
    }
  }

  console.log(dados.cep);
  console.log(ceperror);

  return (
    <>
      <TextField
        className={styles.input}
        id="name"
        label="Nome Completo"
        size="small"
        value={dados.name}
        onChange={(e) => setDados.setName(e.target.value)}
        required
      />
      <TextField
        className={styles.input}
        id="documento"
        label="Documento"
        size="small"
        value={dados.doc}
        onChange={(e) => setDados.setDoc(e.target.value)}
        required
      />
      <TextField
        className={styles.input}
        id="cep"
        label="Cep"
        size="small"
        value={dados.cep}
        onChange={AdicionarCep}
        onBlur={pegarCep}
        required
        error={ceperror !== null} // Corrigido o operador de verificação para verificar se ceperror é diferente de null
        helperText={ceperror} // Corrigido para exibir ceperror diretamente se estiver presente
      />
      <TextField
        className={styles.input}
        id="logradouro"
        label="Logradouro"
        size="small"
        value={dados.logradouro}
        onChange={(e) => setDados.setLogradouro(e.target.value)}
        required
      />
      <TextField
        className={styles.input}
        id="bairro"
        label="Bairro"
        size="small"
        value={dados.bairro}
        onChange={(e) => setDados.setBairro(e.target.value)}
        required
      />
      <TextField
        className={styles.input}
        id="cidade"
        label="Cidade"
        size="small"
        value={dados.cidade}
        onChange={(e) => setDados.setCidade(e.target.value)}
        required
      />
    </>
  );
};

export default Passo1;
