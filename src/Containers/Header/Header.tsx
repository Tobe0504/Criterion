import classes from "./Header.module.css";
import logo from "../../Assets/Images/logo.svg";
import { routes } from "../../Utilities/routes";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { useEffect, useState } from "react";

type HeaderProps = {
  isDark?: boolean;
};

const Header = ({ isDark }: HeaderProps) => {
  // States
  const [navBackground, setNavBackground] = useState("transparent");

  // Utils
  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY > window.innerHeight) {
      setNavBackground(isDark ? "#191919" : "#F4F4F4");
    } else {
      setNavBackground("transparent");
    }
  };

  // Effects

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={classes.container}
      style={{ backgroundColor: navBackground }}
    >
      <img src={logo} alt="Criterion" />

      {routes.map((data, i) => {
        return (
          <Link
            to={data.route}
            key={i}
            style={isDark ? { color: "#F4F4F4" } : undefined}
          >
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
