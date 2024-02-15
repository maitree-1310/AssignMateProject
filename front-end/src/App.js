
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage";

import "./custom.scss";



function App() {
  console.log("Hello")

  return (
    <Routes>

      <Homepage></Homepage>
    </Routes>
  );
}

export default App;
