import Layout from "../../Components/Layout/Layout";
import AboutVision from "../AboutVision/AboutVision";
import AboutWhoWeAre from "../AboutWhoWeAre/AboutWhoWeAre";

const About = () => {
  return (
    <Layout isDark>
      <AboutWhoWeAre />
      <AboutVision />
    </Layout>
  );
};

export default About;
