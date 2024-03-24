import { Container, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import styles from "./terceiro.module.sass";
import { red } from "@mui/material/colors";

const Terceiro = ({ dados }) => {
  const [email, setEmail] = React.useState("");
  const [obg, setObg] = React.useState("");

  return (
    <>
      <Container className={styles.text}>
        <Typography>
          Obrigado{" "}
          <span style={{ color: "#1976d2", fontWeight: "bold" }}>
            {dados.name}
          </span>{" "}
          por participar dessa jornada.
        </Typography>
        <Typography> Espero que você tenha apreciado meu trabalho.</Typography>
      </Container>
      <Container className={styles.text}>
        <Typography>
          Os dados e informações no site até o momento não foram{" "}
        </Typography>
        <Typography>
          gravadas e servem apenas como forma de experiência para os usuários
        </Typography>
      </Container>
      <Container className={`${styles.text} ${styles.last}`}>
        <Typography>
          Entretanto caso tenha interesse no meu trabalho por favor
        </Typography>
        <Typography>
          deixe uma mensagem no campo a baixo com seu contato,{" "}
        </Typography>
        <Typography>retornarei o mais breve. Muito obrigado!</Typography>
      </Container>
      <TextField
        id="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </>
  );
};

export default Terceiro;
