import classes from "./HomeVideo.module.css";
import homeVideo from "../../Assets/Images/homepageVideo.svg";

const HomeVideo = () => {
  return (
    <div className={classes.container}>
      <img src={homeVideo} alt="Criterion Video" />
    </div>
  );
};

export default HomeVideo;
