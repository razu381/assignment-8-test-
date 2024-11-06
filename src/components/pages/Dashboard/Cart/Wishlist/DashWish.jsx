import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../../../RootComp";
import SingleItemCart from "../SingleItemCart";
import { wishContext } from "../../../../RootComp";

function DashWish({ productData }) {
  //Get all cart data
  let [wish, setWish] = useContext(wishContext);
  console.log(wish);

  let wishedProducts = [];
  if (productData) {
    wish.forEach((id) => {
      let obj = productData.find((product) => product.id == id);
      if (obj) wishedProducts.push(obj);
    });
    console.log(wishedProducts);
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-bold text-2xl">WishList</h1>
        </div>
      </div>

      <div>
        {wishedProducts
          ? wishedProducts.map((product, idx) => (
              <SingleItemCart product={product} key={idx} />
            ))
          : null}
      </div>
    </div>
  );
}

export default DashWish;
