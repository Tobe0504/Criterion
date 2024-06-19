import { Route, Routes } from "react-router-dom";
import Home from "./Containers/Home/Home";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
    </Routes>
  );
}

export default App;
