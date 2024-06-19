import Layout from "../../Components/Layout/Layout";
import HomeDevelop from "../HomeDevelop/HomeDevelop";
import HomeEmbedding from "../HomeEmbedding/HomeEmbedding";
import HomeFeatures from "../HomeFeatures/HomeFeatures";
import HomeHeroSection from "../HomeHeroSection/HomeHeroSection";
import HomeTranscending from "../HomeTranscending/HomeTranscending";
import HomeVideo from "../HomeVideo/HomeVideo";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <Layout>
      <HomeHeroSection />
      <HomeFeatures />
      <HomeVideo />
      <HomeFeatures scrollRight />
      <HomeEmbedding />
      <HomeTranscending />
      <HomeDevelop />
    </Layout>
  );
};

export default Home;
