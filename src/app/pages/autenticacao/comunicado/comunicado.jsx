import { Paper } from "@mui/material";
import styles from './comunicado.module.sass'

const Comunicado = () => {
  return (
    <>
      <Paper className={styles.paper}>
        <h2 className={styles.conteudo}>
          Este site visa demonstrar o conhecimento do autor em programação,
          destacando suas habilidades na linguagem React.js com Next.js, e sua
          ênfase na experiência do usuário, baseada em conceitos mais modernos. Por esse motivo, nenhum dado utilizado durante a
          sua interação é armazenado.
        </h2>
      </Paper>
    </>
  );
};

export default Comunicado;
