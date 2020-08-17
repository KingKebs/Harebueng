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

      let newBasket = [...state.basket];
      // go and check all basket ListItemSecondaryAction, check if id in basket matches actionID
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // item does exist in basket,remove it by using the splice function.
        newBasket.splice(index, 1); // get the item selected to be removed
      } else {
        console.warn(`cant remove product (id: ${action.id}) as its `);
      }

      return { ...state, basket: newBasket };

    default:
      return state;
  }
}

export default reducer;
