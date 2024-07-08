import classes from "./HomeVideo.module.css";
import homeVideo from "../../Assets/Images/homepageVideo.svg";
import Image from "../../Components/Image/Image";

const HomeVideo = () => {
  return (
    <div className={classes.container}>
      <Image
        src={homeVideo}
        alt="Criterion Video"
        loading="lazy"
        hash="L7C6.KIU00?b~VIAt8o#9G9Z~p?a"
      />
    </div>
  );
};

export default HomeVideo;
