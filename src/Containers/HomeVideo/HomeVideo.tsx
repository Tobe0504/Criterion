import classes from "./HomeVideo.module.css";
import { useEffect, useRef } from "react";

const HomeVideo = () => {
  // refs
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Effects
  useEffect(() => {
    const video = videoRef.current;

    const playVideoOnFocus = () => {
      if (document.activeElement === video) {
        video?.play();
      }
    };

    const handleWindowBlur = () => video?.pause();
    const handleWindowFocus = () => {
      if (document.activeElement === video) {
        video?.play();
      }
    };

    video?.addEventListener("focus", playVideoOnFocus);
    window.addEventListener("blur", handleWindowBlur);
    window.addEventListener("focus", handleWindowFocus);

    video?.play();

    return () => {
      video?.removeEventListener("focus", playVideoOnFocus);
      window.removeEventListener("blur", handleWindowBlur);
      window.removeEventListener("focus", handleWindowFocus);
    };
  }, []);

  return (
    <div className={classes.container}>
      <video controls={false} autoPlay muted ref={videoRef}>
        <source
          src="https://res.cloudinary.com/dmpdhnjqs/video/upload/v1722662831/IMG_3859_blulhd.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default HomeVideo;
