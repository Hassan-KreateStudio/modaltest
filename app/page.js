import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Profilepage from "./profilePage/page";
import React from "react";
import AddProject from "./addProject/page";
import AddEducation from "./addEducation/page";

const App = () => {
  return (
    <div>
      <Profilepage />
    </div>
  );
};

export default App;
