import ReactDOM, { createPortal } from 'react-dom'
import { useState } from "react";
import CartContext from "./cart-context";
import classes  from './cartProvider.module.css'
const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
   const [warning, setWarning]= useState(false)

  
  const addItemToCartHandler = (item) => {
    console.log(item);
     let isPresent = false;
    cart.forEach((product,index) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    });
    if (isPresent) {
      setWarning(true)
      setTimeout(()=>{
        setWarning(false)
      },2000)
      return ;
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) {
        ind = index;
      }
    });
    const tempArr = cart;
    tempArr[ind].amount =Number(tempArr[ind].amount) +  d;
    if (tempArr[ind].amount === 0) {
      tempArr[ind].amount = 1;
    }

    setCart([...tempArr]);
  };
  const cartContext = {
    items: cart,
    setcart: setCart,

    addItem: addItemToCartHandler,

    handleChange: handleChange,
    warning:warning,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    {warning && <div  className= {classes.warning}> Item is already added in your cart</div>}
     
    </CartContext.Provider>
  );
};
export default CartProvider;
