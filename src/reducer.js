// Data layer logic goes into this file as an object

export const basketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const initialState = {
  basket: [
    {
      id: "8775",
      title: "Muko Black",
      price: 101.96,
      image: require("./images/mukoBlack.jpg"),
      rating: 4,
    },
    {
      id: "8776",
      title: "Logic Bluetooth Speaker",
      price: 212.17,
      image: require("./images/speaker.jpeg"),
      rating: 4,
    },
  ],
  user: null,
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // logic for ADDING item to basket
      return {
        ...state, // return current state as is
        basket: [...state.basket, action.item], // add action.item + action.item to array
      };

    case "REMOVE_FROM_BASKET":
      // logic Remove items from the basket
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< Updated upstream
      return { state };
=======
>>>>>>> af397947b66a7349f17eef36dda0cbe5d2c58c1e
      let newBasket = [...state.basket];
      // go and check all basket ListItemSecondaryAction, check if id in basket matches actionID
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
<<<<<<< HEAD
=======

>>>>>>> af397947b66a7349f17eef36dda0cbe5d2c58c1e
      if (index >= 0) {
        // item does exist in basket,remove it by using the splice function.
        newBasket.splice(index, 1); // get the item selected to be removed
      } else {
        console.warn(`cant remove product (id: ${action.id}) as its `);
      }

      return { ...state, basket: newBasket };
<<<<<<< HEAD

=======
>>>>>>> Stashed changes
>>>>>>> af397947b66a7349f17eef36dda0cbe5d2c58c1e
=======
      return { ...state };
>>>>>>> master
    default:
      return state;
  }
}

export default reducer;
