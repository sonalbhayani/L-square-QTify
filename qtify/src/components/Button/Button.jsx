import { Button as MuiButton  } from "@mui/material";
import styles from "./Button.module.css";

function Button({ onClick, text }) {
    return (
  <MuiButton  variant="contained"
      component="button" 
      onClick={onClick}
      className={styles.button}>
    {text}
  </MuiButton >
    );
}
export default Button;