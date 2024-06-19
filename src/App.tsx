import { Route, Routes } from "react-router-dom";
import About from "./Containers/About/About";
import Home from "./Containers/Home/Home";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<About />} path="/about-us" />
    </Routes>
  );
}

export default App;
