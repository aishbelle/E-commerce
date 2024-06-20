// create a context
// Provider
// consumer => useContext Hook
import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import { useContext } from "react";
import reducer from "../reducer/Productreducer.js";

const API = "https://api.pujakaitem.com/api/products";
const AppContext = createContext();// Create a context 
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading:false,
  singleProduct:{}
};
const productList=[
  {
    id:1,
    name:"Strappy Heeled Sandals",
    price:2000,
    category:"Shoes",
    img:"C:/Users/aashi/Downloads/WhatsApp Image 2024-02-11 at 14.15.03.jpeg"
  }
]
// Create a Provider
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      // const res = await axios.get(url);
      // const products = await res.data;
      const products=productList;
      console.log(products);
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // my 2nd Api call for single product

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({type:"SET_SINGLE_ERROR"})
    }
  };
  useEffect(() => {
    getProducts(API);
  }, []);
  return (
    <AppContext.Provider value={{ ...state,getSingleProduct }}>{children}</AppContext.Provider>
  );
};
//custom hooks

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
