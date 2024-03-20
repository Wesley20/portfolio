"use client";
import * as React from "react";
import styles from "./page.module.sass";
import Sidebar from "./pages/sidebar";
import Topbar from "./pages/topbar";
import { Box } from "@mui/material";
import Footer from "./pages/footer";
import Autenticação from "./pages/autenticacao";
import Formularios from "./pages/formularios";
import Aplicacao from "./pages/aplicacao";
import Autor from "./pages/autor";

export default function Home() {
  const [option, setOption] = React.useState("Autenticação");

  console.log(option);
  return (
    <main className={styles.main}>
      <Topbar />
      <Box className={styles.general_box}>
        <Sidebar setOption={setOption} />
        {option === "Autenticação" ? <Autenticação /> : null}
        {option === "Formulários" ? <Formularios /> : null}
        {option === "Aplicação" ? <Aplicacao /> : null}
        {option === "Autor" ? <Autor /> : null}
      </Box>
      <Footer />
    </main>
  );
}
