import styles from "./page.module.css";
import Profilepage from "./profilePage/page";
import React from "react";
import ResumeLoading from "./resume/loading";
import ResumeReady from "./resumeReady/page";

const App = () => {
  return (
    <div>
      <Profilepage />
    </div>
  );
};

export default App;
