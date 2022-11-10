import React from "react";
import styles from "./Home.module.css";
import back from "../Assetes/Home.jpg";

const Home = () => {
  return (
    <div className={styles.body}>
      <img className={styles.backimg} src={back} alt="" />
      <div>
      <p className={styles.p1}>Let's drink</p>
        <p className={styles.p2}>whats you and your kitchen need</p>
       
      </div>
    </div>
  );
};
export default Home;
