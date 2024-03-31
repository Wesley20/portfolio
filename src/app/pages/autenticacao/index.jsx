import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Autenticação1 from "./login-tipo1";
import Autenticação2 from "./login-tipo2/login2";
import styles from "./index.module.sass";
import Comunicado from "./comunicado/comunicado";

const Autenticação = () => {
  return (
    <>
      <Box className={styles.quadroLogin}>
        <Typography className={styles.titulo} variant="h5" color="primary">
          Autenticação
        </Typography>
        <Autenticação1 />
        <Comunicado />
        <Autenticação2 />
      </Box>
    </>
  );
};

export default Autenticação;
