import { useState } from "react";
import classes from "./CaerreDropdown.module.css";

const CaerreDropdown = () => {
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
        <p>Real Estate Development Manager</p>
        <p>FullTime</p>
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
          <path
            d="M20.5547 3.6334L17.416 3.73783L17.8097 15.5694L2.24332 0.787681L0.0808678 3.06494L15.6398 17.8395L3.81821 18.0575L3.87607 21.1974L21.113 20.8648L20.5547 3.6334Z"
            fill="#191919"
          />
        </svg>
      </div>

      <div
        style={isOpen ? { maxHeight: "400px" } : { maxHeight: "0px" }}
        className={classes.body}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          tempora sed aut iure. Quo facere ex, temporibus iure, reiciendis
          dolorem rem repudiandae sint, mollitia nihil impedit itaque animi
          molestias atque obcaecati ad sed tempora quis. Quaerat autem mollitia
          laboriosam optio sint incidunt quis nihil sunt numquam, quae nostrum
          esse consectetur.
        </p>
      </div>
    </div>
  );
};

export default CaerreDropdown;
