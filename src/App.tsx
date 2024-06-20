import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./Containers/About/About";
import Careers from "./Containers/Careers/Careers";
import Home from "./Containers/Home/Home";

function App() {
  // Router
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about-us" />
        <Route element={<Careers />} path="/careers" />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
