const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((curElem) => curElem.price);
      let maxPrice = Math.max(...priceArr);
      const minPrice = Math.min(...priceArr);
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice, minPrice, price: maxPrice },
      };
    case "SET_GRIDVIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LISTVIEW":
      return {
        ...state,
        grid_view: false,
      };
    case "GET_SORT_VALUE":
      //   let userSortValue = document.getElementById("sort");
      //   console.log(userSortValue);
      //   let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      //   console.log(sort_value);
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      //   let tempSortProduct = [...action.payload];
      const { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }
        if (state.sorting_value === "highest") {
          return b.price - a.price;
        }
        if (state.sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }
        if (state.sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      newSortData = tempSortProduct.sort(sortingProducts);
      return {
        ...state,
        filter_products: newSortData,
      };
    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];
      const { text, category, company, color, price } = state.filters;
      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElm) => {
          return curElm.name.toLowerCase().includes(text);
        });
      }
      if (category) {
        if (category !== "ALL") {
          tempFilterProduct = tempFilterProduct.filter((curElm) => {
            return curElm.category === category;
          });
        }
      }
      if (company) {
        if (company !== "ALL") {
          tempFilterProduct = tempFilterProduct.filter((curElm) => {
            return curElm.company.toLowerCase() === company.toLowerCase();
          });
        }
      }
      if (color) {
        if (color !== "ALL") {
          tempFilterProduct = tempFilterProduct.filter((curElem) => {
            return curElem.colors.includes(color);
          });
        }
      }
      if (price) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.price <= price;
        });
      }
      return {
        ...state,
        filter_products: tempFilterProduct,
      };

      case "CLEAR_FILTERS":
        return{
          ...state,
          filters:{
            ...state.filters,
            text:" ",
    category:"ALL",
    company:"ALL",
    color:"ALL",
    maxPrice: state.filters.maxPrice,
    price: state.filters.maxPrice,
    minPrice: state.filters.minPrice,

          }
        }

    default:
      return state;
  }
};

export default FilterReducer;
