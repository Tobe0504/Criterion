import Layout from "../../Components/Layout/Layout";
import Transition from "../../Utilities/Transition/Transition";
import HomeDevelop from "../HomeDevelop/HomeDevelop";
import HomeEmbedding from "../HomeEmbedding/HomeEmbedding";
import HomeFeatures from "../HomeFeatures/HomeFeatures";
import HomeHeroSection from "../HomeHeroSection/HomeHeroSection";
import HomeSignUp from "../HomeSignUp/HomeSignUp";
import HomeTranscending from "../HomeTranscending/HomeTranscending";
import HomeVideo from "../HomeVideo/HomeVideo";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  // Effects
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Layout>
      <HomeHeroSection />
      <HomeFeatures />
      <HomeVideo />
      <HomeFeatures scrollRight />
      <HomeEmbedding />
      <HomeTranscending />
      <HomeDevelop />
      <HomeSignUp />
    </Layout>
  );
};

export default Transition(Home);
