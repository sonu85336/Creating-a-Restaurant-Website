import React,{useContext}  from 'react'
 ;
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
 import CartContext from '../../Store/cart-context';
const Cart  = (props) => {
const cartcntx= useContext(CartContext)
 
  const cartItem = (
    <ul className={classes["cart-items"]}>
      { cartcntx.items.map((item) => (
        <li>Name:{item.name} Price:{item.price}  Quantity:{item.quantity}</li>
      ))}
    </ul>
  );
   
  return (
   <div>
   
    
     <Modal  closeoncart={props.closeoncart}> <div className={classes.total}>
     {cartItem}
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
