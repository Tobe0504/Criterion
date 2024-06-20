import Button from "../../Components/Button/Button";
import classes from "./HomeHeroSection.module.css";
import heroImage from "../../Assets/Images/heroImage.svg";
import { motion } from "framer-motion";

// Variants
const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAnimation = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};
const HomeHeroSection = () => {
  return (
    <section className={classes.container}>
      <motion.div
        className={classes.textSection}
        variants={banner}
        initial="initial"
        animate="animate"
      >
        <h4>
          CREATING{" "}
          <motion.span>
            TOMORROW'S <br />
            SPACES,{" "}
          </motion.span>
          INSPIRED BY
          <motion.span variants={letterAnimation}>TODAY'S NEEDS</motion.span>
        </h4>
        <Button>
          <span>GET IN TOUCH</span>
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.86307 0.119629L7.58108 1.3905L12.4858 6.1107H0V7.89481H12.4798L7.58108 12.6092L8.86307 13.8801L16 7L8.86307 0.119629Z"
              fill="#F4F4F4"
            />
          </svg>
        </Button>
      </motion.div>

      <img src={heroImage} alt="Hero" loading="lazy" />
    </section>
  );
};

export default HomeHeroSection;
