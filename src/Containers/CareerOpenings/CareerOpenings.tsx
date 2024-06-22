import React from "react";
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
          return (
            <React.Fragment key={i}>
              <CaerreDropdown
                title={data.title}
                role={data.duration}
                content={
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo quam deserunt consequuntur beatae pariatur architecto, dolorum voluptatibus eaque laudantium alias reiciendis, laborum fugit temporibus consectetur magni sit ducimus voluptate autem."
                }
              />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default CareerOpenings;
