import { Container, Typography } from "@mui/material";
import styles from "./index.module.sass";
import Image from "next/image";
import instagram from "../../../../imagem/footer/instagram-round-svgrepo-com.svg";
import facebook from "../../../../imagem/footer/facebook-round-svgrepo-com.svg";
import linkedin from "../../../../imagem/footer/linkedin-round-svgrepo-com.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <Container className={styles.footer}>
        <Typography>TEste</Typography>
        <Container className={styles.contact}>
          <Link
            href="https://www.instagram.com/wesley.costa20/"
            target="_blank"
          >
            <Image
              src={instagram}
              alt="Instagram image button"
              width={20}
              height={20}
            />
          </Link>
          <Link
            href="https://www.facebook.com/wesley.costa20"
            target="_blank"
          >
            <Image
              src={facebook}
              alt="Facebook image button"
              width={20}
              height={20}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/wesley-almeida-da-costa-297411a9/"
            target="_blank"
          >
            <Image
              src={linkedin}
              alt="Linkedin image button"
              width={20}
              height={20}
            />
          </Link>
        </Container>
      </Container>
    </>
  );
};

export default Footer;
