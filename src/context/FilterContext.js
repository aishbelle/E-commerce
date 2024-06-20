import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./Productcontext";
import reducer from "../reducer/FilterReducer.js";
const Filtercontext = createContext();

const intialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: " ",
    category: "ALL",
    company: "ALL",
    color: "ALL",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};
export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, intialState);

  //   to set the grid view

  const setGridView = () => {
    return dispatch({ type: "SET_GRIDVIEW" });
  };

  const setListView = () => {
    return dispatch({ type: "SET_LISTVIEW" });
  };

  // sorting function

  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };
  // to clear the filters

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [products, state.sorting_value, state.filters]);
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);
  return (
    <Filtercontext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sorting,
        updateFilterValue,
        clearFilters,
      }}
    >
      {children}
    </Filtercontext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(Filtercontext);
};
