"use client";
import styles from "./index.module.sass";
import * as React from "react";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import People from "@mui/icons-material/People";
import { Typography } from "@mui/material";
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import AppsIcon from '@mui/icons-material/Apps';
import PersonIcon from '@mui/icons-material/Person';

const data = [
  { icon: <People />, label: "Autenticação" },
  { icon: <DynamicFormIcon />, label: "Formulários" },
  { icon: <AppsIcon />, label: "Aplicação" },
  { icon: <PersonIcon />, label: "Autor" },
];



const Sidebar = ({setOption}) => {
  const [open, setOpen] = React.useState(true);

  const ItensMenu = (x) => {
    let option = x.target.innerText
    setOption(option)
  }

  return (
    <Box className={styles.barra_lateral}>
      
      <Box>
        <Typography className={styles.title}>Menu</Typography>
        {data?.map((item) => (
          <ListItemButton key={item.label} className={styles.listItemButton} onClick={ItensMenu}>
            <ListItemIcon className={styles.listItemIcon}>
              {item.icon}
            </ListItemIcon>
            <Typography className={styles.listItemText}>
              {item.label}
            </Typography>
          </ListItemButton>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
