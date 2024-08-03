import { useContext } from "react";
import Button from "../../Components/Button/Button";
import { AppContext } from "../../Context/AppContext";
import classes from "./CareerHero.module.css";

const coreValues2 = [
  "Trust",
  "Growth",
  "Empathy",
  "Responsibility",
  "Discipline",
  "Community",
];

const CareerHero = () => {
  // Context
  const { scrollToOpenings } = useContext(AppContext);

  return (
    <section className={classes.container}>
      <div>
        <h4>
          <span>
            JOIN OUR <br />
            TEAM{" "}
          </span>
          AT CRITERION HOMES
        </h4>
        <p>
          Join our team of people who are passionate about real estate, driven
          by excellence, and eager to make a difference.
        </p>
        <Button onClick={scrollToOpenings}>
          <span>{"join our team".toUpperCase()}</span>
          <svg
            width="17"
            height="15"
            viewBox="0 0 17 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.36307 0.619629L8.08108 1.8905L12.9858 6.6107H0.5V8.39481H12.9798L8.08108 13.1092L9.36307 14.3801L16.5 7.5L9.36307 0.619629Z"
              fill="#F4F4F4"
            />
          </svg>
        </Button>
      </div>

      <div>
        <p>{"values WE LIVE BY:".toUpperCase()}</p>
        <div>
          {coreValues2.map((data, i) => {
            return <span key={i}>{data}</span>;
          })}
        </div>
      </div>
    </section>
  );
};

export default CareerHero;
