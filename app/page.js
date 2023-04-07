import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Profilepage from "./profilePage/page";

import React from "react";

const App = () => {
  return (
    <div>
      <Profilepage />
    </div>
  );
};

export default App;
