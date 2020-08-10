// Setting up data later -> setting this up to manage state
import React, { createContext, useContext, useReducer } from "react";

// This is the data layer
export const StateContext = createContext();

// Lets build the provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// this is whot we use it inside the component
export const useStateValue = () => useContext(StateContext);
