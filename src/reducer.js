// Data layer logic goes into this file as an object
// this below is the shopping cart object in the reducer file
export const initialState = {
  basket: [
    {
      id: 8775,
      title: "Logic Bluetooth Speaker",
      price: 232.96,
      image: require("./images/speaker.jpeg"),
      rating: 4,
    },
    {
      id: 8775,
      title: "Logic Bluetooth Speaker",
      price: 232.96,
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
      return { ...state };
    default:
      return state;
  }
}

export default reducer;
