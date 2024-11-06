import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { categoryContext } from "./ProductsSection";

function ProductsNav() {
  let [productCategory, setProductCategory] = useContext(categoryContext);

  return (
    <div className="p-6 bg-white rounded-[32px]">
      <ul className="space-y-8 py-10">
        <li>
          <Link
            to={`products/computers`}
            className="font-extrabold text-lg bg-[#09080F] bg-opacity-5 py-3 px-7 rounded-[32px] text-text-gadget text-opacity-60 block"
          >
            Computers
          </Link>
        </li>
        <li>
          <Link
            to={`/products/phones`}
            className="font-extrabold text-lg bg-[#09080F] bg-opacity-5 py-3 px-7 rounded-[32px] text-text-gadget text-opacity-60  block"
          >
            Phones
          </Link>
        </li>
        <li>
          <Link
            to={`/products/chargers`}
            className="font-extrabold text-lg bg-[#09080F] bg-opacity-5 py-3 px-7 rounded-[32px] text-text-gadget text-opacity-60  block"
          >
            Chargers
          </Link>
        </li>
        <li>
          <Link
            to={`/products/power banks`}
            className="font-extrabold text-lg bg-[#09080F] bg-opacity-5 py-3 px-7 rounded-[32px] text-text-gadget text-opacity-60 block"
          >
            Power banks
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ProductsNav;
