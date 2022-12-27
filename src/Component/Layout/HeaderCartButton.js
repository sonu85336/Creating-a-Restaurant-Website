import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {

  const cartcontext1 = useContext(CartContext);
  let quantity = 0;
  cartcontext1.items.forEach(item => {
    quantity = quantity + Number(item.quantity);
  });
  // const numberOfCartItems = cartctx.items.reduce((currNumber, item) => {
  //   return currNumber + item.amount;
  // }, 0);

  return (
    <button className={classes.button} onClick={props.onmodalshow}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};
export default HeaderCartButton;
