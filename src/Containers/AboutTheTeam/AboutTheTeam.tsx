import classes from "./AboutTheTeam.module.css";
import teamMember from "../../Assets/Images/teamMember.svg";

const AboutTheTeam = () => {
  // Utils
  const team = [
    {
      name: "Hakeem Bakare",
      role: "Head of Logistics",
      image: teamMember,
    },
    {
      name: "Hakeem Bakare",
      role: "Head of Logistics",
      image: teamMember,
    },
    {
      name: "Hakeem Bakare",
      role: "Head of Logistics",
      image: teamMember,
    },
    {
      name: "Hakeem Bakare",
      role: "Head of Logistics",
      image: teamMember,
    },
  ];
  return (
    <section className={classes.container}>
      <h2>{"The Team".toUpperCase()}</h2>

      <div>
        {team.map((data, i) => {
          return (
            <div className={classes.member} key={i}>
              <img src={data.image} alt={data.name} loading="lazy" />
              <p>{data.name}</p>
              <p>{data.role}</p>
              <p>READ MORE</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutTheTeam;
