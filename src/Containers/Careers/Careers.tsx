import { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import { AppContext } from "../../Context/AppContext";
import Transition from "../../Utilities/Transition/Transition";
import AboutTheTeam from "../AboutTheTeam/AboutTheTeam";
import CareerAboutCriterion from "../CareerAboutCriterion/CareerAboutCriterion";
import CareerHero from "../CareerHero/CareerHero";
import CareerOpenings from "../CareerOpenings/CareerOpenings";

const Careers = () => {
  // COntext
  const { openingsRef } = useContext(AppContext);
  return (
    <Layout>
      <CareerHero />
      <CareerAboutCriterion />
      <AboutTheTeam />
      <div ref={openingsRef}>
        <CareerOpenings />
      </div>
    </Layout>
  );
};

export default Transition(Careers);
