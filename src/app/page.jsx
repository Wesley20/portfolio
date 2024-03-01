import Image from "next/image";
import styles from "./page.module.sass";
import Sidebar from "./pages/sidebar";
import Topbar from "./pages/topbar";
import { Box } from "@mui/material";
import Footer from "./pages/footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Topbar />
      <Box className={styles.general_box}>
        <Sidebar/>
      </Box>
      <Footer />
    </main>
  );
}
