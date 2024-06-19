import classes from "./HomeDevelop.module.css";
import homePageDevelop from "../../Assets/Images/homePageDevelop.svg";
import Button from "../../Components/Button/Button";

const HomeDevelop = () => {
  return (
    <section className={classes.container}>
      <p>{"Craft your dream space brick by brick".toUpperCase()}</p>
      <h2>{"develop a cutting-edge sustainable property".toUpperCase()}</h2>
      <img src={homePageDevelop} alt="Develop" />

      <Button>
        <span>{"GET IN TOUCH"}</span>
        <span>
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.86307 0.119736L7.58108 1.3906L12.4858 6.11081H0V7.89492H12.4798L7.58108 12.6093L8.86307 13.8803L16 7.00011L8.86307 0.119736Z"
              fill="#F4F4F4"
            />
          </svg>
        </span>
      </Button>
    </section>
  );
};

export default HomeDevelop;
