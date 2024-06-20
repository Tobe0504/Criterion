import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { routes } from "../../Utilities/routes";
import classes from "./HeaderSideNav.module.css";

type HeaderSideNavProps = {
  closeSideNav: () => void;
};

const HeaderSideNav = ({ closeSideNav }: HeaderSideNavProps) => {
  return (
    <section className={classes.container}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={closeSideNav}
      >
        <path
          d="M23.7716 23.7699L8.23047 8.22876"
          stroke="#DC7322"
          strokeWidth="2.15131"
        />
        <path
          d="M23.7716 8.22913L8.23047 23.7703"
          stroke="#DC7322"
          strokeWidth="2.15131"
        />
      </svg>

      <div className={classes.routesSection}>
        {routes.map((data, i) => {
          return (
            <Link to={data.route} key={i}>
              {data.title}
            </Link>
          );
        })}

        <Button>
          <span>{"download profile".toUpperCase()}</span>
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.86307 0.963867L7.58108 2.23473L12.4858 6.95494H0V8.73905H12.4798L7.58108 13.4535L8.86307 14.7244L16 7.84424L8.86307 0.963867Z"
              fill="#F4F4F4"
            />
          </svg>
        </Button>
      </div>
    </section>
  );
};

export default HeaderSideNav;
