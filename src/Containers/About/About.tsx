import Layout from "../../Components/Layout/Layout";
import Transition from "../../Utilities/Transition/Transition";
import AboutCoreValues from "../AboutCoreValues/AboutCoreValues";
import AboutTheTeam from "../AboutTheTeam/AboutTheTeam";
import AboutVision from "../AboutVision/AboutVision";
import AboutWhoWeAre from "../AboutWhoWeAre/AboutWhoWeAre";

const About = () => {
  return (
    <Layout isDark>
      <AboutWhoWeAre />
      <AboutVision />
      <AboutCoreValues />
      <AboutTheTeam />
    </Layout>
  );
};

export default Transition(About);
