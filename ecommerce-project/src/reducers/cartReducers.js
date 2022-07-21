export const initialState = [];

export const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    // console.log('reducer', action);

    return [...state, action.payload];
  }
  if (action.type === 'CLEAR_CART') {
    return [];
  }
  if (action.type === 'ADD_QUANTITY') {
    // console.log(action, state);
    let newCart = [...state];
    const findItem = newCart.findIndex(
      (element) => element.productID == action.payload.productID
    );
    newCart[findItem] = {
      ...newCart[findItem],
      quantity: newCart[findItem].quantity + 1,
    };
    return newCart;
  }
  if (action.type === 'SUB_QUANTITY') {
    let newCart = [...state];
    const findItem = newCart.findIndex(
      (element) => element.productID == action.payload.productID
    );
    if (state[findItem].quantity === 1) {
      newCart = state.filter(
        (element) => element.productID !== action.payload.productID
      );
    } else {
      newCart[findItem] = {
        ...newCart[findItem],
        quantity: newCart[findItem].quantity - 1,
      };
    }

    return newCart;
  }

  if (action.type === 'REMOVE_ITEM') {
    console.log('test', action.payload);
    const newCart = state.filter(
      (element) => element.productID !== action.payload.productID
    );
    return newCart;
  }
};
