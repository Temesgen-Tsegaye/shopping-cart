import { useParams, useLocation } from "react-router";
import SHOPE_ITEMS from "../data/data";
import styles from "./IndivisualItem.module.css";
import { useOutletContext } from "react-router";
import { Link } from "react-router-dom";

const ShopeDetail = () => {
  const location = useLocation();
  const id = location.state.id;
  
  // const STATE=location.state.
  const [addedItems, setAddedItems] = useOutletContext();

  const SELECTED_ITEM = SHOPE_ITEMS.find((items) => {
    return items.id == id;
  });
  
  function handleAdding() {
      
      let x=addedItems.some((items)=>{
          return items.id==id
      })
    
      if(x){
          return
      }
    return setAddedItems((priv) => {
        
      return [...priv,SELECTED_ITEM];
    });
  }
  return (
    <div className={styles.container}>
      <div>
        <img
          className={styles.image}
          src={SELECTED_ITEM.image}
          alt=""
        
        />
        <span>{SELECTED_ITEM.name}</span>

        <span>{SELECTED_ITEM.price}$</span>
      </div>
      <div>
      <button className={styles.buttonn} onClick={handleAdding}>Add to Cart</button>
     <Link to='/shope'><button className={styles.buttonn}> Back</button></Link>
      
      </div>
      
    </div>
  );
};

export default ShopeDetail;
