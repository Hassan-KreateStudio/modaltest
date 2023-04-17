import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Profilepage from "./profilePage/page";
import React from "react";
import AddProject from "./addProject/page";
import Resume from "./resume/page";

const App = () => {
  return (
    <div>
      <Resume />
    </div>
  );
};

export default App;
