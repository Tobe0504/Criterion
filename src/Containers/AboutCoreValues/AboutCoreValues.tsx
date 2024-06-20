import { useEffect } from "react";
import classes from "./AboutCoreValues.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

// Utils
export const coreValues = [
  {
    title: "Trust",
    caption:
      "Trust is the foundation of what we do at Criterion Homes. We believe in building long-term relationships based on transparency and honesty.",
  },
  {
    title: "Empathy",
    caption:
      "We understand you. We listen to your unique goals and support you every step of the way in building not just your home but your hopes and dreams.",
  },
  {
    title: "Discipline",
    caption:
      "Dedication to delivering exceptional real estate services to our clients is a reflection of our discipline in making well-informed decisions for the future.",
  },

  {
    title: "Growth",
    caption:
      "While we continuously expand our expertise to serve you in an ever-dynamic industry, we empower you with the knowledge required to grow and navigate the market.",
  },
  {
    title: "Responsible",
    caption:
      "We hold ourselves to the highest ethical standards, acting with integrity in every interaction.",
  },
  {
    title: "Community",
    caption:
      "At Criterion Homes, we believe in building together. We develop sustainable and vibrant communities where everyone thrives.",
  },
];

const AboutCoreValues = () => {
  // Effects
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className={classes.container}>
      <div className={classes.header} data-aos="zoom-in-up">
        <h2>{"our core values".toUpperCase()}</h2>
        <p>
          {
            "We believe everyone deserves a place to call home. We are committed to providing exceptional service, in-depth market knowledge, and unwavering dedication to your home ownership and investment goals. "
          }
        </p>
      </div>

      <div className={classes.coreValues}>
        <div>
          {coreValues.map((data, i) => {
            if (i % 2 === 0) {
              return (
                <div data-aos="zoom-in-left">
                  <h2>0{i + 1}</h2>
                  <h4>{data.title}</h4>
                  <p>{data.caption}</p>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>

        <div>
          {coreValues.map((data, i) => {
            if (i % 2 !== 0) {
              return (
                <div data-aos="zoom-in-right">
                  <h2>0{i + 1}</h2>
                  <h4>{data.title}</h4>
                  <p>{data.caption}</p>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>

        <div>
          {coreValues.map((data, i) => {
            return (
              <div data-aos="zoom-in-right">
                <h2>0{i + 1}</h2>
                <h4>{data.title}</h4>
                <p>{data.caption}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutCoreValues;
