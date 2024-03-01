"use client";
import styles from "./index.module.sass";
import * as React from "react";
import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ArrowRight from "@mui/icons-material/ArrowRight";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Home from "@mui/icons-material/Home";
import Settings from "@mui/icons-material/Settings";
import People from "@mui/icons-material/People";
import PermMedia from "@mui/icons-material/PermMedia";
import Dns from "@mui/icons-material/Dns";
import Public from "@mui/icons-material/Public";
import { Typography } from "@mui/material";
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import AddchartIcon from '@mui/icons-material/Addchart';
import AppsIcon from '@mui/icons-material/Apps';
import PersonIcon from '@mui/icons-material/Person';

const data = [
  { icon: <People />, label: "Autenticação" },
  { icon: <DynamicFormIcon />, label: "Formulários" },
  { icon: <AppsIcon />, label: "Aplicação" },
  { icon: <PersonIcon />, label: "Autor" },
];

const Sidebar = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <Box className={styles.barra_lateral}>
      
      <Box>
        <Typography className={styles.title}>Menu</Typography>
        {data?.map((item) => (
          <ListItemButton key={item.label} className={styles.listItemButton}>
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
