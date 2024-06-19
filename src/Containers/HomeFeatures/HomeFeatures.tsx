import classes from "./HomeFeatures.module.css";

type HomeFeaturesProps = {
  scrollRight?: boolean;
};

const HomeFeatures = ({ scrollRight }: HomeFeaturesProps) => {
  // Utils
  const features = ["Infrastructure", "Advisory", "Real Estate", "Investment"];
  const featuresInfinite = [...features, ...features, ...features, ...features];
  return (
    <section className={classes.container}>
      <div className={scrollRight ? classes.slideRight : classes.slide}>
        {featuresInfinite.map((data, i) => (
          <div key={i}>
            <span>{data.toUpperCase()}</span>
            <svg
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4.81998" cy="4.08792" r="4.02408" fill="#D9D9D9" />
            </svg>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeFeatures;
