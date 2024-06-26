import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import loaderGif from "../../Assets/Gifs/loader.gif";
import classes from "./MountLoader.module.css";
import { animate, AnimatePresence, motion } from "framer-motion";

const letterAnimation = {
  initial: {
    y: 400,
    scale: 0,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
      repeat: "Infinity",
    },
    scale: 2,
  },
};

const MountLoader = () => {
  //   Context
  const { loading } = useContext(AppContext);

  if (loading) {
    return (
      <AnimatePresence>
        <motion.section
          className={classes.container}
          initial={{
            opacity: 1,
          }}
          transition={{
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
          }}
          exit={{ opacity: 0 }}
        >
          <motion.img
            src={loaderGif}
            alt="Loader"
            initial={{
              scale: 1,
              y: 200,
            }}
            animate={{ y: 0, scale: 2 }}
            transition={{
              ease: [0.6, 0.01, -0.05, 0.95],
              duration: 4,
            }}
            exit={{
              scale: 4,
            }}
          />
        </motion.section>
      </AnimatePresence>
    );
  } else {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
          }}
          transition={{
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
          }}
        >
          <Outlet />;
        </motion.div>
      </AnimatePresence>
    );
  }
};

export default MountLoader;
