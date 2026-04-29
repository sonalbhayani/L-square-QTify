import { Button as muiButton } from "@mui/material";
import styles from "./Button.module.css";

function Button(onClick) {
    return (
  <muiButton variant="text" onClick={onClick} className={styles.button}>
    Give Feedback
  </muiButton>
    );
}
export default Button;