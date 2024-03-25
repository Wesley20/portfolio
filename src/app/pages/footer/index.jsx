import { Container, Typography } from "@mui/material";
import styles from "./index.module.sass";
import Image from "next/image";
import instagram from "../../../../imagem/footer/icons8-instagram.svg";
import facebook from "../../../../imagem/footer/icons8-facebook.svg";
import linkedin from "../../../../imagem/footer/icons8-linkedin.svg";
import whatsapp from "../../../../imagem/footer/icons8-whatsapp.svg";
import Link from "next/link";
// import { whatsapp } from "@/app/next.config";

const Footer = () => {
  return (
    <>
      <Container className={styles.footer}>
        
        <Container className={styles.contact}>
          <Link
            href="https://www.instagram.com/wesley.costa20/"
            target="_blank"
          >
            <Image
              className={styles.social}
              src={instagram}
              alt="Instagram image button"
            />
          </Link>
          <Link
            href="https://www.facebook.com/wesley.costa20"
            target="_blank"
          >
            <Image
              className={styles.social}
              src={facebook}
              alt="Facebook image button"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/wesley-almeida-da-costa-297411a9/"
            target="_blank"
          >
            <Image
              className={styles.social}
              src={linkedin}
              alt="Linkedin image button"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/wesley-almeida-da-costa-297411a9/"
            target="_blank"
          >
            <Image
              className={styles.social}
              src={whatsapp}
              alt="Whatsapp image button"
              width={28}
              height={28}
            />
          </Link>
        </Container>
        <Typography sx={{color: "#ddd"}}>icones by: icons8.com </Typography>
      </Container>
    </>
  );
};

export default Footer;
