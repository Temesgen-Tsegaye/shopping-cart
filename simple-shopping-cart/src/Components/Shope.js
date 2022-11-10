import React, { Component, useEffect, useState } from "react";
import styles from "./Shop.module.css";
import SHOPE_ITEMS from "../data/data";
import Items from "./ShopeItems";
import { Link, } from "react-router-dom";

const Shope = () => {
  return (
    <div className={styles.main}>
      {SHOPE_ITEMS.map((items) => {
       
        
        return (
          <>
            <Link to={`/shope/${items.id}`}  key={items.id} state={items}>
              
              <Items
                
                srcc={items.image}
                name={items.name}
                price={items.price}
                key={items.id}//key are added here not on the link
              />
            </Link>
          
          </>
        );
      })}
    </div>
  );
};
export default Shope;
