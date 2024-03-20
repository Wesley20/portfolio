import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Autenticação1 from "./login-tipo1";
import styles from "./index.module.sass";

const Autenticação = () => {
  return (
    <>
      <Box className={styles.quadroLogin}>
      <Typography className={styles.titulo} variant="h5" color='primary'>Autenticação</Typography>
        <Autenticação1 />
      </Box>
    </>
  );
};

export default Autenticação;
