import classes from "./Button.module.css";
import { CircularProgress } from "@mui/material";

type ButtonPropTypes = {
  children: React.ReactNode;
  type?: "primary" | "secondary" | "tertiary" | "black";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  subType?: "gold" | "normal";
};

const Button = ({
  children,
  type,
  disabled,
  onClick,
  loading,
  subType,
}: ButtonPropTypes) => {
  return (
    <button
      className={`${subType === "normal" ? classes.normal : classes.gold} ${
        classes.button
      } ${
        type === "secondary"
          ? classes.secondary
          : type === "tertiary"
          ? classes.tertiary
          : type === "black"
          ? classes.black
          : classes.primary
      } `}
      onClick={onClick}
      disabled={loading || disabled}
    >
      {loading ? <CircularProgress size="1.5rem" color="inherit" /> : children}
    </button>
  );
};

export default Button;
