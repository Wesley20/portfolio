import { Box, TextField } from "@mui/material";
import styles from "./formulario.module.sass";
import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Passo1 from './passo1/primeiro';
import Passo2 from './passo2/segundo';
import Passo3 from './Passo3/terceiro';

const steps = ["Informações", "Interesses", "Contato"];

const Formularios = () => {
  const [name, setName] = React.useState("");
  const [doc, setDoc] = React.useState("");
  const [cep, setCep] = React.useState("");
  const [logradouro, setLogradouro] = React.useState("");
  const [bairro, setBairro] = React.useState("");
  const [cidade, setCidade] = React.useState("");

  const dados = { name, doc, cep, logradouro, bairro, cidade };
  const setDados = { setName, setDoc, setCep, setLogradouro, setBairro, setCidade };
  const validaPasso1 = Object.values(dados).every(value => value !== "");

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  console.log(activeStep);

  return (
    <Box className={styles.formulario}>
      <Stepper
        activeStep={activeStep}
        orientation={window.innerWidth < 756 ? 'vertical' : 'horizontal'}
      >
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step className={styles.step} key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Muito obrigado por sua participação!!!
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Resetar</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {activeStep === 0 ? <Passo1 dados={dados} setDados={setDados} /> : null}
          {activeStep === 1 ? <Passo2 dados={dados} setDados={setDados} /> : null}
          {activeStep === 2 ? <Passo3 dados={dados} setDados={setDados} /> : null}
          <Typography sx={{ mt: 2, mb: 1 }}>Passo {activeStep + 1}</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Voltar
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Pular
              </Button>
            )}

            <Button onClick={handleNext} disabled={!validaPasso1}>
              {activeStep === steps.length - 1 ? "Terminar" : "Próximo"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default Formularios;
