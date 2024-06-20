const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;

    // tackle the existing product

    let existingProduct = state.cart.find(
      (curItem) => curItem.id === id + color
    );

    if (existingProduct) {
      let updatedProduct = state.cart.map((curelem) => {
        if (curelem.id === id + color) {
          let newAmount = curelem.amount + amount;
          if (newAmount >= curelem.max) {
            newAmount = curelem.max;
          }
          return {
            ...curelem,
            amount: newAmount,
          };
        } else {
          return curelem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter((elm) => {
      return elm.id !== action.payload;
    });
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "CART_TOTAL_ITEM") {
    let updatedItemVal = state.cart.reduce((initialVal, curelem) => {
      let { amount } = curelem;
      initialVal = initialVal + amount;
      return initialVal;
    }, 0);
    return {
      ...state,
      total_item: updatedItemVal,
    };
  }

  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curelem) => {
      if (curelem.id === action.payload) {
        let decAmount = curelem.amount - 1;
        if(decAmount<=0){
          decAmount=1;
        }
        return {
          ...curelem,
          amount: decAmount,
        };
      } else {
        return curelem;
      }
    });

    return{
      ...state,
      cart:updatedProduct
    }
  }

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curelem) => {
      if (curelem.id === action.payload) {
        let IncAmount = curelem.amount + 1;
        if(IncAmount>=curelem.max){
          IncAmount=curelem.max
        }
        return {
          ...curelem,
          amount: IncAmount,
        };
      } else {
        return curelem;
      }
    });

    return{
      ...state,
      cart:updatedProduct
    }
  }

  if (action.type === "CART_TOTAL_PRICE") {
    let updatedItemVal = state.cart.reduce((initialVal, curelem) => {
      let { price , amount} = curelem;
      initialVal = initialVal + price*amount;
      return initialVal;
    }, 0);
    return {
      ...state,
      total_price: updatedItemVal,
    };
  }
  return state;
};

export default CartReducer;
