import { Button as MuiButton  } from "@mui/material";
import styles from "./Button.module.css";

function Button({ onClick }) {
    return (
  <MuiButton  variant="contained"
      onClick={onClick}
      className={styles.button}>
    Give Feedback
  </MuiButton >
    );
}
export default Button;