import { Outlet } from "react-router-dom";
import Navbar from "./header/Navbar";
import Footer from "./footer/Footer";
import { createContext, useState } from "react";

export let cartContext = createContext();
export let wishContext = createContext();

function RootComp() {
  let [cart, setCart] = useState([1, 2, 4]);
  let [wish, setWish] = useState([3, 5, 15]);

  //console.log(cart);

  return (
    <>
      <wishContext.Provider value={[wish, setWish]}>
        <cartContext.Provider value={[cart, setCart]}>
          <Navbar />
          <Outlet />
          <Footer />
        </cartContext.Provider>
      </wishContext.Provider>
    </>
  );
}

export default RootComp;
