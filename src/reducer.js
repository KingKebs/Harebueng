// Data layer logic goes into this file as an object

export const initialState = {
  basket: [],
};

function reducer(state, action) {
  console.log(action, state);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // logic for ADDING item to basket
      return {
        ...state, // return curren state as is
        basket: [...state.basket, action.item], // inclu current basket and add action.item which is the add button
      };

    case "REMOVE_FROM_BASKET":
      // logic Remove items from the basket
      return { state };
    default:
      return state;
  }
}

export default reducer;
