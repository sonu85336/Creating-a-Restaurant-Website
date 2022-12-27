 import React,{useState} from 'react'
 import CartContext from "./cart-context"
 
const CartProvider=(props)=>{
 const [items,updateItems]=useState([])
const addItemCartHandler=(item)=>{
    updateItems([...items,item])
    console.log(cartContext)
}
 
    
    const removeItemFromCartHandler =(id)=>{}

const cartContext ={
    items:items,
    totalAmount:0,
    addItem:addItemCartHandler,
    removeItem:removeItemFromCartHandler,

}
return (
    <CartContext.Provider value={cartContext}>
       
       {console.log( cartContext)} 
       {props.children}
         
    </CartContext.Provider>
)
}
export default CartProvider;