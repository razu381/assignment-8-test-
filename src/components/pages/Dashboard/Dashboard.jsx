import React, { useContext, useEffect, useState } from "react";
import DashCart from "./Cart/DashCart";
import { cartContext } from "../../RootComp";
import DashWish from "./Cart/Wishlist/DashWish";

function Dashboard() {
  let [showCart, setShowCart] = useState(true);

  //fetch data from the products
  let [productData, setProductData] = useState([]);
  useEffect(() => {
    fetch("ProductData.json")
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, []);

  return (
    <div>
      <div className="bg-primary-gadget py-10 ">
        <div className="mx-[10%] flex flex-col items-center text-white">
          <h2 className="font-bold text-3xl py-5">Dashboard</h2>
          <p>
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="flex gap-2 mt-8">
            <button
              onClick={() => setShowCart(true)}
              className="btn btn-sm rounded-full  px-10 font-extrabold text-lg"
            >
              Cart
            </button>
            <button
              onClick={() => setShowCart(false)}
              className="btn btn-sm btn-outline rounded-full px-10 text-white font-extrabold text-lg"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>

      <div className="pt-12 px-[20%] ">
        {showCart ? (
          <DashCart productData={productData} />
        ) : (
          <DashWish productData={productData} />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
