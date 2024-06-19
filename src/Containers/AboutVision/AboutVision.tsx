import classes from "./AboutVision.module.css";

const AboutVision = () => {
  // Utils
  const vision = [
    {
      title: "OUR Vision",
      caption: [
        "To be the development company of choice by positioning real estate as a foundation for a sustainable and enriched living.",
      ],
    },

    {
      title: "oUR MISSION",
      caption: [
        "To ensure the prosperity and satisfaction of all stakeholders through our commitment to excellence, innovation, professionalism, environmental stewardship and transparency.",
      ],
    },

    {
      title: "Our commitment",
      caption: [
        "We believe everyone deserves a place to call home. We are committed to providing exceptional service, in-depth market knowledge, and unwavering dedication to your home ownership and investment goals. ",
        "We achieve this through professionalism, efficiency, attention to detail, and a relentless pursuit of your best interests, fostering a long-term partnership built on trust and expertise.",
      ],
    },
  ];
  return (
    <section className={classes.container}>
      {vision.map((data, i) => {
        return (
          <div className={classes.vision} key={i}>
            <h4>{data.title.toUpperCase()}</h4>
            {data.caption.map((datum, j) => {
              return <p key={j}>{datum}</p>;
            })}
          </div>
        );
      })}
    </section>
  );
};

export default AboutVision;
