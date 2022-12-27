import React,{useContext}from "react";
import classes from "./MealsItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../Store/cart-context";
 
function MealItemForm(props) {
const cartContext=useContext(CartContext)
  const addItemToCart=(event)=>{
event.preventDefault();
const quantity = document.getElementById("amount"+props.id).value
cartContext.addItem({...props.item,quantity:quantity})
// cartContext.items.push(props.item)
console.log(cartContext)
  }
  return (
    <form   className={classes.form}>
     { console.log(cartContext.items)}
      <Input
        label="Amount"
        input={{
          id: "amount" +props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button  onClick={addItemToCart}>+Add</button>
    </form>
  );
}
export default MealItemForm;
