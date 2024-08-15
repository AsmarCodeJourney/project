import React, { createContext } from "react";
import BasketProvider from "./BasketProvider";
import WishlistProvider from "./WishlistProvider";
import TokenProvider from "./TokenProvider";

const MainContext = createContext();
function MainProvider({ children }) {
  return (
    <div>
      <BasketProvider>
        <WishlistProvider>
          <TokenProvider>{children}</TokenProvider>
        </WishlistProvider>
      </BasketProvider>
    </div>
  );
}

export default MainProvider;
