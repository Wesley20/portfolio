import React, { useEffect, useState } from "react";
import {
  Box,
  Chip,
  Container,
  Divider,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
  Alert,
  Snackbar,
} from "@mui/material";
import { jwtDecode } from "jwt-decode";
import styles from "./index.module.sass";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FacebookSDK from "@/app/utils/facebookSDK";
import CloseIcon from "@mui/icons-material/Close";

const Autenticação1 = () => {
  const [data, setData] = useState("teste");
  const [googleScriptLoaded, setGoogleScriptLoaded] = useState(false);
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [validaLogin, setValidaLogin] = React.useState(true);

  useEffect(() => {
    // Função para carregar o script do Google SignIn
    const loadGoogleSignInScript = () => {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.defer = true;
      script.onload = () => setGoogleScriptLoaded(true); // Indica que o script foi carregado com sucesso
      document.head.appendChild(script);
    };

    // Função para carregar o script jwt-decode
    const loadJwtDecodeScript = () => {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/jwt-decode/build/jwt-decode.js";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };

    // Chama as funções para carregar os scripts
    loadGoogleSignInScript();
    loadJwtDecodeScript();

    return () => {
      // Limpa os scripts do DOM quando o componente é desmontado
      const googleScript = document.querySelector(
        'script[src="https://accounts.google.com/gsi/client"]'
      );
      const jwtScript = document.querySelector(
        'script[src="https://unpkg.com/jwt-decode/build/jwt-decode.js"]'
      );

      if (googleScript) {
        document.head.removeChild(googleScript);
      }

      if (jwtScript) {
        document.head.removeChild(jwtScript);
      }
    };
  }, []);

  useEffect(() => {
    // Inicializa o Google após o carregamento da página
    if (googleScriptLoaded) {
      google.accounts.id.initialize({
        client_id:
          "714367407540-a7md8vithme588m29iqnct1e4c16vor3.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });
      google.accounts.id.renderButton(document.getElementById("buttonDiv"), {
        theme: "filled_blue",
        size: "large",
        type: "standard",
        shape: "",
        text: "signup_with",
        width: "250",
        logo_alignment: "left",
      });
      google.accounts.id.prompt(); // also display the One Tap dialog
    }
  }, [googleScriptLoaded]);

  function handleCredentialResponse(response) {
    const decodedData = jwtDecode(response.credential);
    setData(decodedData);
    console.log(decodedData);
  }
  console.log(login);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickLogin = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleLogin = (e) => {
    setLogin(e.target.value);
    if (e.target.value.length < 7) {
      setValidaLogin(true);
    } else {
      if (senha.length < 7) {
        setValidaLogin(true);
      } else {
        setValidaLogin(false);
      }
    }
  };

  const handlePassword = (e) => {
    setSenha(e.target.value);
    if (e.target.value.length < 7) {
      setValidaLogin(true);
    } else {
      if (login.length < 7) {
        setValidaLogin(true);
      } else {
        setValidaLogin(false);
      }
    }
  };

  return (
    <Box>
      <FacebookSDK />
      <Paper className={styles.paper}>
        <Typography>Acesse sua conta</Typography>
        <Container className={styles.lista}>
          <TextField
            id="login"
            className={styles.login}
            size="small"
            label="Login"
            value={login}
            onChange={handleLogin}
          />
          <FormControl onChange={handlePassword} variant="outlined">
            <InputLabel
              className={styles.password}
              htmlFor="outlined-adornment-password"
              size="small"
            >
              Password
            </InputLabel>
            <OutlinedInput
              id="password"
              className={styles.password}
              value={senha}
              size="small"
              type={showPassword ? "text" : "password"}
              label="Password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            sx={{ margin: 1 }}
            variant="contained"
            onClick={handleClickLogin}
            disabled={validaLogin}
          >
            Logar
          </Button>
        </Container>
        <Divider>ou</Divider>
        <Container className={styles.lista}>
          <Box className={styles.botaoSocial}>
            {googleScriptLoaded && <div id="buttonDiv"></div>}
          </Box>
          <Box className={styles.botaoSocial}>
            <div
              className="fb-login-button"
              data-width="250"
              data-size="large"
              data-button-type=""
              data-layout=""
              data-auto-logout-link="true"
              data-use-continue-as="false"
            ></div>
          </Box>
        </Container>
      </Paper>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          teste
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Autenticação1;
