 import { useContext } from "react"
import CartIcon from "../Cart/CartIcon"
import classes from './HeaderCartButton.module.css'
 import CartContext from "../../store/cart-context"
const HeaderCartButton = (props)=>{
 
const   cartctx = useContext(CartContext)
 let quantity = 0;
 cartctx.items.forEach((item)=>{
    quantity  = quantity +  Number( item.amount);
 })
// const  quantity = cartctx.items.reduce((currNumber, item) => {
//     return currNumber + item.amount;
//   }, 0);

return (
    <button  className={classes.button}  onClick={props.onClick}> 
        <span className={classes.icon}>
            <CartIcon></CartIcon>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{ quantity} </span>
    </button>
)
} 
export default HeaderCartButton;