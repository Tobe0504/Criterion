import Button from "../../Components/Button/Button";
import classes from "./HomeHeroSection.module.css";
import heroImage from "../../Assets/Images/heroImage.svg";

const HomeHeroSection = () => {
  return (
    <section className={classes.container}>
      <div className={classes.textSection}>
        <h4>
          CREATING{" "}
          <span>
            TOMORROW'S <br />
            SPACES,{" "}
          </span>
          INSPIRED BY
          <span>TODAY'S NEEDS</span>
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
      </div>

      <img src={heroImage} alt="Hero" />
    </section>
  );
};

export default HomeHeroSection;
