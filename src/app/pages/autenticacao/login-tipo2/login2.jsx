import React, { useState } from 'react';
import {
  Paper,
  Typography,
  Box,
  TextField,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  Input,
  Button,
} from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styles from './login2.module.sass'; // Importar o arquivo de estilos

const Autenticação2 = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailValid, setEmailValid] = useState("rpwesley20@gmail.com");
  const [senhaValid, setSenhaValid] = useState(null);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleLogin = (e) => {
    const { value } = e.target;
    setLogin(value);
    setEmailValid(validateEmail(value));
  };

  const handleSenha = (e) => {
    const { value } = e.target;
    setSenha(value);
    setSenhaValid(validateSenha(value));
  };

  const validateEmail = (email) => {
    // Regex para validação de email simples
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateSenha = (senha) => {
    // Verifica se a senha tem pelo menos 8 caracteres, uma letra minúscula,
    // uma letra maiúscula, um número e um caractere especial
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(senha);
  };

  return (
    <>
      <Paper className={styles.paper}>
        <Box>
          <Typography>
            Acesse sua conta ou crie uma nova clicando{' '}
            <span onClick={() => {}} className={styles.link}>
              aqui
            </span>
          </Typography>
          <Box className={styles.box1}>
            <TextField
              sx={{ mt: 1 }}
              size="small"
              fullWidth
              label="Email"
              value={login}
              onChange={handleLogin}
              variant="standard"
              error={!emailValid}
            />
            <FormControl sx={{ mt: 1 }} variant="standard" fullWidth>
              <InputLabel
                className={styles.password}
                htmlFor="outlined-adornment-password"
                size="small"
              >
                Senha
              </InputLabel>
              <Input
                id="password"
                className={styles.password}
                value={senha}
                size="small"
                type={showPassword ? 'text' : 'password'}
                onChange={handleSenha}
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
            <Button sx={{ mt: 2 }} variant="contained" disabled={!emailValid && !senhaValid} >
              Criar
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default Autenticação2;
