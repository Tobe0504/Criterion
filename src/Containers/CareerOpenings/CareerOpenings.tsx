import CaerreDropdown from "../../Components/CareerDropdown/CaerreDropdown";
import classes from "./CareerOpenings.module.css";

const CareerOpenings = () => {
  const careers = [
    {
      title: "Real Estate Development Manager",
      duration: "FullTime",
    },

    {
      title: "Investment Analyst",
      duration: "FullTime",
    },
    {
      title: "Infrastructure Project Coordinator",
      duration: "FullTime",
    },
    {
      title: "Marketing and Sales Executive",
      duration: "FullTime",
    },
    {
      title: "Architectural Designer",
      duration: "FullTime",
    },
  ];

  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <h2>{"openings".toUpperCase()}</h2>
        <p>
          Ready to join us? Apply below to be a part of of our extraordinary
          team.
        </p>
      </div>

      <div>
        {careers.map((data, i) => {
          return <CaerreDropdown />;
        })}
      </div>
    </section>
  );
};

export default CareerOpenings;
