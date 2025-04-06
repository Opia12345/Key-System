import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
