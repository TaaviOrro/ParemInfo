'use client'
import { act, useReducer } from "react";
import AppContext from "./AppContext";

const initialState = {
    activeClient: 0,
}

function appReducer(state, action) {
    switch (action.type) {
        case "switchClient":
            return { ...state, activeClient: action.payload };
        default:
            throw new Error("Unknown action type: " + action.type);
  }
}

const AppProvider = ({ children }) => {
  const [app, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ app, dispatch }}>
      {children}
    </AppContext.Provider>
  )
};

export default AppProvider;