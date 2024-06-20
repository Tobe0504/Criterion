import Button from "../../Components/Button/Button";
import classes from "./HomeTranscending.module.css";
import transcend from "../../Assets/Images/transcend.svg";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const HomeTranscending = () => {
  // Utils
  const featuresExplained = [
    {
      header: "REAL ESTATE",
      caption:
        "Transforming the real estate landscape in Nigeria, we specialize in creating exceptional spaces that blend modern design with lasting value. ",
    },

    {
      header: "INFRASTRUCTURE",
      caption:
        "Meticulously planning and construction of cutting-edge infrastructure to foster sustainable and thriving environments.",
    },

    {
      header: "ADVISORY",
      caption:
        "Guiding you through the complexities of Nigeria's real estate market, our advisory services offer personalized guidance and expert analysis",
    },
    {
      header: "INVESTMENT ",
      caption:
        "Reinventing real estate investment in Nigeria, we provide strategic insights and tailored opportunities to maximize your returns.",
    },
  ];

  // Effects
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className={classes.container}>
      <div data-aos="fade-up-left">
        <h4>
          Transcending the realm of mere service providers. We are architects of
          opportunities
        </h4>

        <Button subType="normal">
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

        <Button subType="normal" type="secondary">
          <span>{"DOWNLOAD PROFILE"}</span>
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
      </div>
      <div>
        <p>Our unwavering commitment extends to:</p>

        <div className={classes.features}>
          {featuresExplained.map((data, i) => {
            return (
              <div className={classes.feature} key={i} data-aos="fade-up-right">
                <h4>{data.header}</h4>
                <p>{data.caption}</p>
              </div>
            );
          })}
        </div>

        <Button subType="normal" type="secondary">
          <span>{"DOWNLOAD PROFILE"}</span>
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
      </div>

      <img
        src={transcend}
        alt="Transcend"
        loading="lazy"
        data-aos="fade-up-left"
      />
    </section>
  );
};

export default HomeTranscending;
