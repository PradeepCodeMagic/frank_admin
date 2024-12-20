import React, { createContext, useState } from "react";

export const adminContext = createContext();

function Context({ children }) {
  let [navVisible, setNavVisibility] = useState(false);


  let globalData = { navVisible, setNavVisibility };
  return (
    <adminContext.Provider value={globalData}>
      {children}
    </adminContext.Provider>
  )
}

export default Context;
