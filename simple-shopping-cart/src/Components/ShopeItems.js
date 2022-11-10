import React, { Component } from "react";
import styles from "./Card.module.css";


const Items = ({ srcc, name, price}) => {

  return (
      
      <div  className={styles.card}>
      <img src={srcc} className={styles.image} />
      <span className={styles.span}>{name}</span>
      <span className={styles.span}>{price}$</span>
    </div>
    
  );
};
export default Items;
