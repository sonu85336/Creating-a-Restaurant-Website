import React,{Fragment} from 'react'
import HeaderCartButton from './HeaderCartButton';
import classes from "./Header.module.css";
import mealsImage from '../../assests/meals.jpg'
 
function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1> Delicious Meals</h1>
        <HeaderCartButton></HeaderCartButton>
         
      </header>
      <div  className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!'></img>
      </div>
    </Fragment> 
  );
}
export default Header;
