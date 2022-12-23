import React  from 'react'
import HeaderCartButton from '../Layout/HeaderCartButton';
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart  = (props) => {

 
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
   
  return (
   <div>
   
    
     <Modal  closeoncart={props.closeoncart}> <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.closeoncart}>Close</button>
        <button className={classes.button}>Order</button>
      </div> </Modal>
    </div>
    
  );
};
export default Cart ;
