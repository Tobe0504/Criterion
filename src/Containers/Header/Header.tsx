import classes from "./Header.module.css";
import logo from "../../Assets/Images/logo.svg";
import { routes } from "../../Utilities/routes";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";

const Header = () => {
  return (
    <div className={classes.container}>
      <img src={logo} alt="Criterion" />

      {routes.map((data, i) => {
        return (
          <Link to={data.route} key={i}>
            {data.title}
          </Link>
        );
      })}

      <Button subType="gold">
        <span>{"download profile".toUpperCase()}</span>
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.86307 0.17041L7.58108 1.44128L12.4858 6.16148H0V7.94559H12.4798L7.58108 12.66L8.86307 13.9309L16 7.05078L8.86307 0.17041Z"
            fill="#F4F4F4"
          />
        </svg>
      </Button>
    </div>
  );
};

export default Header;
