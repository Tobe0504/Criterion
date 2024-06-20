import Layout from "../../Components/Layout/Layout";
import Transition from "../../Utilities/Transition/Transition";
import AboutTheTeam from "../AboutTheTeam/AboutTheTeam";
import CareerAboutCriterion from "../CareerAboutCriterion/CareerAboutCriterion";
import CareerHero from "../CareerHero/CareerHero";
import CareerOpenings from "../CareerOpenings/CareerOpenings";

const Careers = () => {
  return (
    <Layout>
      <CareerHero />
      <CareerAboutCriterion />
      <AboutTheTeam />
      <CareerOpenings />
    </Layout>
  );
};

export default Transition(Careers);
