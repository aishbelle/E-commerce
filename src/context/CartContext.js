import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/CartReducer";
const Cartcontext = createContext();

const getLocalCartData = () => {
  let newCartData = localStorage.getItem("CartStore");
  // if (newCartData === []) {
  //   return [];
  // } else {
  //   return JSON.parse(newCartData);

  // }

  const parseddata=JSON.parse(newCartData);
  if(!Array.isArray(parseddata)) return [];
  return parseddata;

};
const intialState = {
  //   cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 50000,
};
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  // increment and decrement the product

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };
  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  //   to add the data in localStorage
  useEffect(() => {
    dispatch({ type: "CART_TOTAL_ITEM" });
    dispatch({type:"CART_TOTAL_PRICE"});
    localStorage.setItem("CartStore", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <Cartcontext.Provider
      value={{ ...state, addToCart, removeItem, clearCart,setDecrease,setIncrease }}
    >
      {children}
    </Cartcontext.Provider>
  );
};

const useCartContext = () => {
  return useContext(Cartcontext);
};
export { CartProvider, useCartContext };
