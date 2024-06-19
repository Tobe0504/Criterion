import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { routes } from "../../Utilities/routes";
import classes from "./Footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logoLarge from "../../Assets/Images/logoLarge.svg";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.topSection}>
        <p>Stay up to date with our projects and developments</p>
        <div>
          <Button subType="normal">
            <span>SUBMIT</span>
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.86014 0.575684L7.57815 1.84655L12.4829 6.56675H-0.00292969V8.35087H12.4769L7.57815 13.0653L8.86014 14.3362L15.9971 7.45606L8.86014 0.575684Z"
                fill="#F4F4F4"
              />
            </svg>
          </Button>
        </div>
      </div>

      <div className={classes.middleSection}>
        <div>
          {routes.map((data, i) => {
            return (
              <Link to={data.route} key={i}>
                {data.title}
              </Link>
            );
          })}
          <Link to={"#0"}>{"download profile".toUpperCase()}</Link>
        </div>

        <div>
          <a href="mailto:info@criterionhomesltd.com">
            info@criterionhomesltd.com
          </a>
          <a href="tel:+2348058573915">+2348058573915</a>
          <p>Machima Plaza, Mambolo Junction, Wuse Zone 2, FCT Abuja</p>
        </div>

        <div>
          <InstagramIcon />
          <FacebookRoundedIcon />
          <XIcon />
          <LinkedInIcon />
        </div>
      </div>

      <div className={classes.logoSection}>
        <img src={logoLarge} alt="Criterion" />
      </div>

      <div className={classes.copySection}>
        &copy; Criterion Homes 2024 | All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
