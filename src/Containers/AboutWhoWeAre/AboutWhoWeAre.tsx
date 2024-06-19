import classes from "./AboutWhoWeAre.module.css";

const AboutWhoWeAre = () => {
  return (
    <section className={classes.container}>
      <h2>{"who we are".toUpperCase()}</h2>
      <p>
        We are a real estate development firm that seeks to reinvent the real
        estate business in Nigeria. We understand that home is where the heart
        lies, and our team of experts is dedicated to helping our clients create
        their dream property, brick by brick.
      </p>
    </section>
  );
};

export default AboutWhoWeAre;
