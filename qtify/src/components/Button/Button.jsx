import { Button as MuiButton  } from "@mui/material";
import styles from "./Button.module.css";

function Button({ onClick, text,className  }) {

    return (
  <MuiButton  variant="contained"
      component="button" 
      onClick={onClick}
      className={`${styles.button} ${className}`}>
    {text}
  </MuiButton >
    );
}
export default Button;