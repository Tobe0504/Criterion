import { useState } from "react";
import classes from "./CaerreDropdown.module.css";

type CaerreDropdownProps = {
  title: string;
  role: string;
  content?: string | React.ReactNode;
};

const CaerreDropdown = ({ title, role, content }: CaerreDropdownProps) => {
  // States
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={classes.container}>
      <div
        className={classes.header}
        onClick={() => {
          setIsOpen((prevState) => !prevState);
        }}
      >
        <p>{title}</p>
        <p>{role}</p>
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={
            isOpen
              ? { transform: "rotate(-90deg)" }
              : { transform: "rotate(0deg" }
          }
        >
          <path d="M20.5547 3.6334L17.416 3.73783L17.8097 15.5694L2.24332 0.787681L0.0808678 3.06494L15.6398 17.8395L3.81821 18.0575L3.87607 21.1974L21.113 20.8648L20.5547 3.6334Z" />
        </svg>
      </div>

      <div
        style={isOpen ? { maxHeight: "1000px" } : { maxHeight: "0px" }}
        className={classes.body}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

export default CaerreDropdown;
