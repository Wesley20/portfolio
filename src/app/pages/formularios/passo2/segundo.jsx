import { Box, Container, Rating, TextField, Typography } from "@mui/material";
import styles from "./segundo.module.sass";
import React from "react";

const Segundo = () => {
  const [livro, setLivro] = React.useState("");
  const [jogose, setJogose] = React.useState("");
  const [jogost, setJogost] = React.useState("");
  const [esporte, setEsporte] = React.useState("");
  const [muscu, setMuscu] = React.useState("");
  const [olivro, setOlivro] = React.useState("");
  const [inte, setInte] = React.useState("");
  const [carro, setCarro] = React.useState("");
  const [viagem, setViagem] = React.useState("");
  const [filme, setFilme] = React.useState("");
  const [medita, setMedita] = React.useState("");
  const [serie, setSerie] = React.useState("");
  const [docu, setDocu] = React.useState("");
  const [outros1, setOutros1] = React.useState("");
  const [outros2, setOutros2] = React.useState("");
  var caracteres = 256;

  const handleChange = (e) => {
    // Verifica se o comprimento da entrada não excede o limite
    if (e.target.value.length <= caracteres) {
      setInte(e.target.value);
    }
  };

  return (
    <>
    <br></br>
      <TextField
        className={styles.input}
        id="interesse"
        label={`Passatempo ${
          inte.length === 0 ? "" : caracteres - inte.length
        }`}
        placeholder="O que você gosta de fazer para se destrair no seu tempo livre?"
        size="small"
        multiline
        rows={4}
        value={inte}
        onChange={handleChange}
        required
      /><br></br>
      <Typography sx={{pb: 2}}>Pontue seu interesse</Typography>
      <Box className={styles.rating}>
        <Container className={styles.box}>
          <Typography className={styles.ratingtittle}>Livros</Typography>
          <Rating
            sx={{pb: 2}}
            name="livro"
            value={livro}
            onChange={(e) => setLivro(e.target.value)}
          />
          <Typography className={styles.ratingtittle}>Jogos eletronicos</Typography>
          <Rating
            sx={{pb: 2}}
            name="jogose"
            value={jogose}
            onChange={(e) => setJogose(e.target.value)}
          />
        </Container>
        <Container className={styles.box}>
          <Typography className={styles.ratingtittle}>Esporte</Typography>
          <Rating
            sx={{pb: 2}}
            name="esporte"
            value={esporte}
            onChange={(e) => setEsporte(e.target.value)}
          />
          <Typography className={styles.ratingtittle}>Jogos tabuleiro</Typography>
          <Rating
            sx={{pb: 2}}
            name="jogost"
            value={jogost}
            onChange={(e) => setJogost(e.target.value)}
          />
        </Container>
        <Container className={styles.box}>
          <Typography className={styles.ratingtittle}>Musculação</Typography>
          <Rating
            sx={{pb: 2}}
            name="muscu"
            value={muscu}
            onChange={(e) => setMuscu(e.target.value)}
          />
          <Typography className={styles.ratingtittle}>Hqs, Mangas, outros</Typography>
          <Rating
            sx={{pb: 2}}
            name="olivro"
            value={olivro}
            onChange={(e) => setOlivro(e.target.value)}
          />
        </Container>
        <Container className={styles.box}>
          <Typography className={styles.ratingtittle}>Carros</Typography>
          <Rating
            sx={{pb: 2}}
            name="carro"
            value={carro}
            onChange={(e) => setCarro(e.target.value)}
          />
          <Typography className={styles.ratingtittle}>Viagens</Typography>
          <Rating
            sx={{pb: 2}}
            name="viagem"
            value={viagem}
            onChange={(e) => setViagem(e.target.value)}
          />
        </Container>
        <Container className={styles.box}>
          <Typography className={styles.ratingtittle}>Meditação</Typography>
          <Rating
            sx={{pb: 2}}
            name="meditacao"
            value={medita}
            onChange={(e) => setMedita(e.target.value)}
          />
          <Typography className={styles.ratingtittle}>Filmes</Typography>
          <Rating
            sx={{pb: 2}}
            name="filme"
            value={filme}
            onChange={(e) => setFilme(e.target.value)}
          />
        </Container>
        <Container className={styles.box}>
          <Typography className={styles.ratingtittle}>Documentario</Typography>
          <Rating
            sx={{pb: 2}}
            name="documentario"
            value={docu}
            onChange={(e) => setDocu(e.target.value)}
          />
          <Typography className={styles.ratingtittle}>Séries</Typography>
          <Rating
            sx={{pb: 2}}
            name="serie"
            value={serie}
            onChange={(e) => setSerie(e.target.value)}
          />
        </Container>
        <Container className={styles.box}>
          <TextField className={styles.box} size="small" label="Outros..." variant="standard" value={outros1} onChange={e => setOutros1(e.target.value)} />
          <Rating
            sx={{pb: 2}}
            name="outros2"
            value={outros2}
            onChange={(e) => setOutros2(e.target.value)}
          /></Container>
      </Box>
    </>
  );
};

export default Segundo;
