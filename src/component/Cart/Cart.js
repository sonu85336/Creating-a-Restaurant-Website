 
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
  import CartItem  from './CartItem'
import { useState,useContext, useEffect } from "react";
 import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const carctx = useContext(CartContext)
   const [price,setPrice]= useState(0);
  
   const handlePrice=()=>{
    let ans =0;
    carctx.items.map((item)=>(
      ans += item.amount*item.price
    ))
    setPrice(ans)
   }

  const handleRemove = (id)=>{
   const arr = carctx.items.filter((item)=>item.id != id)
   carctx.setcart(arr)
  
  }
   useEffect   (()=>{
    handlePrice()
   })
   const Increasingitemno = carctx.handleChange

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {  carctx.items.map((item) => (
        <CartItem
        id = {item.id}
          key={item.id}
          name={item.name}
          amount={item.amount}
           price={item.price}
           item = {item}
           handleRemove ={handleRemove }
           Increasingitemno  ={Increasingitemno}
           >
        </CartItem>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${price}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
