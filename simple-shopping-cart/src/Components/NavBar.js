import { Link } from "react-router-dom";
import React, { useContext } from "react";
import styles from "./Nav.module.css";
import { FaCartPlus } from "react-icons/fa";

const NavBar = ({addeditems}) => {
  return (
    <nav className={styles.nav}>

      <Link to="/">Home</Link>
      <Link to="/shope">Shope</Link>
      <div className={styles.facontainer}>
        <div className={styles.cartcounter}>{addeditems.length}</div>
        <Link to="/Cart">
          <FaCartPlus className={styles.fa} color="white" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
