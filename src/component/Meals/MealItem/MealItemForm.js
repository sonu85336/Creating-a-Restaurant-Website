import { useContext, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";
const MealItemForm = (props) => {
  const cartctx = useContext(CartContext);
  
const addItemTocart =(event)=>{
event.preventDefault()
const amount = document.getElementById('amount' +props.id).value;
 cartctx.addItem({...props.item,amount:amount})}
 
   
  

  return (
    <form className={classes.form}  >
      <Input
        
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
           defaultValue: "1",
        }}
      ></Input>
      <button  onClick={addItemTocart}  >+ Add</button>
    </form>
  );
};
export default MealItemForm;
