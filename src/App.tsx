import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePages from "./Pages/Homepage/HomePages";
import Login from "./Pages/Loginpage/Login";
import Temu from "./Pages/Temu/Temu";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePages />} />
         <Route path="/login" element={<Login />} />
         <Route path="/Temu" element={<Temu />} />
      </Routes>
    </div>
  );
};

export default App;
