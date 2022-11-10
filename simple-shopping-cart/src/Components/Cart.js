import React, { Component, useState, useEffect } from "react";
import SHOPE_ITEMS from "../data/data";
import { useOutletContext } from "react-router";
import styles from "./Cart.module.css";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const [addedItems, setAddedItems] = useOutletContext();
  const [totalPrice, setTotalPrice] = useState();

  const incrementNoItems = (id, newAmount, e) => {
    e.preventDefault();

    const updated = addedItems.map((items) => {
      if (items.id == id) {
        return { ...items, amount: newAmount };
      }
      return items;
    });
    setAddedItems(updated);
  };
  const decrementNoItems = (id, newAmount, e) => {
    e.preventDefault();
    console.log(e.target.textContent);
    if (newAmount < 0) {
      return;
    }
    const updated = addedItems.map((items) => {
      if (items.id == id) {
        return { ...items, amount: newAmount };
      }
      return items;
    });
    setAddedItems(updated);
  };
  const DeleteAddedItems = (id) => {
    const NEW_ADDED_ITEMS = addedItems.filter((items) => {
      return items.id !== id;
    });
    setAddedItems(NEW_ADDED_ITEMS);
  };
  useEffect(() => {
    if (addedItems != undefined) {
      let allPrice = addedItems.reduce((total, item) => {
        return total + item.price * item.amount;
      }, 0);

      setTotalPrice(allPrice);
    }
  }, [addedItems]);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {addedItems.map((items) => {
          return (
            <div className={styles.card} key={items.id}>
              <img src={items.image} width="200px" height="200px" />
              
                <div className={styles.item}>
                <button
                  onClick={(e) => {
                    decrementNoItems(items.id, items.amount - 1, e);
                  }}
                >
                  -
                </button>
                <p>amount:{items.amount}</p>
                <button
                  onClick={(e) => {
                    incrementNoItems(items.id, items.amount + 1, e);
                  }}
                >
                  +
                </button>
                </div>
                
                <div className={styles.del}>
                <h2>{items.name}</h2>
              <h2>{items.price}$</h2>
              <FaTrash className={styles.trash} onClick={(e) => {
                    DeleteAddedItems(items.id);
                  }} />
              {/* <button
                 
                >
                  delete
                </button> */}
                </div>
               
               
              
            </div>
          );
        })}
      </div>
      <div className={styles.right}>
        <div>Total price:{totalPrice}</div>
        <button>Procced to payment</button>
      </div>
    </div>
  );
};
export default Cart;
