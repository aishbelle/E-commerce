import React from "react";
import FormatPrice from "../Helper/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/CartContext";
const CartItem = ({ id, name, price, image, color, amount, max }) => {
    const {removeItem,setDecrease,setIncrease}= useCartContext();
 
  // const setDecrease = () => {
  //   quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  // };
  // const setIncrease = () => {
  //   quantity < max ? setQuantity(quantity + 1) : setQuantity(max);

  return (
    <div className="cart-heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>Color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />{" "}
        </p>
      </div>
      <div>
        <CartAmountToggle
          amount={amount}
          setDecrease={()=>setDecrease(id)}
          setIncrease={()=>setIncrease(id)}
        />
      </div>
      <div className="cart-hide">
        <p>
          {" "}
          <FormatPrice price={price * amount} />{" "}
        </p>
      </div>
      <div>
        <FaTrash className="remove_icon" onClick={()=>removeItem(id)}/>
      </div>
    </div>
  );
};

export default CartItem;
