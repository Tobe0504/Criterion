import Layout from "../../Components/Layout/Layout";
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

export default About;
