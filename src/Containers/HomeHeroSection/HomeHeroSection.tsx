import Button from "../../Components/Button/Button";
import classes from "./HomeHeroSection.module.css";
import heroImage from "../../Assets/Images/heroImage.svg";
import { motion } from "framer-motion";
import { AppContext } from "../../Context/AppContext";
import { useContext } from "react";
import heroMobile from "../../Assets/Images/heroMobile.svg";

const HomeHeroSection = () => {
  // COntext
  const { scrollToRef } = useContext(AppContext);
  return (
    <section className={classes.container}>
      <motion.div className={classes.textSection}>
        <h4>
          CREATING{" "}
          <motion.span>
            TOMORROW'S <br />
            SPACES,{" "}
          </motion.span>
          INSPIRED BY
          <motion.span>TODAY 'S NEEDS</motion.span>
        </h4>
        <Button onClick={scrollToRef}>
          <span>GET IN TOUCH</span>
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.86307 0.119629L7.58108 1.3905L12.4858 6.1107H0V7.89481H12.4798L7.58108 12.6092L8.86307 13.8801L16 7L8.86307 0.119629Z" />
          </svg>
        </Button>
      </motion.div>

      <img
        src={heroImage}
        alt="Hero"
        loading="lazy"
        className={classes.desktopImage}
      />
      <img
        src={heroMobile}
        alt="Hero"
        loading="lazy"
        className={classes.mobileImage}
      />
    </section>
  );
};

export default HomeHeroSection;
