// Setting up data later -> setting this up to manage state
import React, { createContext, useContext, usereducer } from "react";

// This is the data layer 
export const  StateContext = createContext();

// Lets build the provider

export const  StateProvider = createContext({reducer, initialState, children}) => {
    
}

