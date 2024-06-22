import classes from "./CareerAboutCriterion.module.css";
import careerAbout from "../../Assets/Images/careerAbout.svg";
import career1 from "../../Assets/Images/career1.svg";
import career2 from "../../Assets/Images/career2.svg";
import career3 from "../../Assets/Images/career3.svg";

const CareerAboutCriterion = () => {
  // Utils
  const whyWork = [
    "Collaborative and inclusive work environment",
    "Opportunities for professional growth and development",
    "Exciting and impactful projects",
  ];

  const images = [career1, career2, career3];

  return (
    <section className={classes.container}>
      <img src={careerAbout} alt="Career" loading="lazy" />
      <div className={classes.textSection}>
        <p>
          At Criterion Homes, we're redefining the real estate landscape in
          Nigeria, one innovative project at a time. We believe that our
          greatest asset is our people. If you're passionate about real estate,
          driven by excellence, and eager to make a difference, we want to hear
          from you. Explore our current opportunities and start building a
          rewarding career with us.
        </p>
      </div>

      <div className={classes.whyWork}>
        <h4>{"Why work with us?".toUpperCase()}</h4>
        <div>
          {whyWork.map((data, i) => {
            return (
              <div key={i}>
                <h4>{i + 1}</h4>
                <p>{data.toUpperCase()}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className={classes.imageSection}>
        {images.map((data, i) => {
          return <img src={data} key={i} alt="Careers" loading="lazy" />;
        })}
      </div>
    </section>
  );
};

export default CareerAboutCriterion;
