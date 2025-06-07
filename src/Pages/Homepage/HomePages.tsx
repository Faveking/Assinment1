import { Route, Routes } from "react-router-dom";
import Login from "../Loginpage/Login";
import App from "../../App";

const HomePages = () => {
  return (
    <div>
      <a href="/Temu">
        <h1>hello</h1>
      </a>
      <a href="/login">
        <h2>Create an account</h2>
      </a>
    </div>
  );
};

export default HomePages;
