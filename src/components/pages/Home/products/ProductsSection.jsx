import React, { createContext, useState } from "react";
import ProductsNavNested from "./ProductsNavNested";
import Products from "./Products";
import { Outlet, useParams } from "react-router-dom";

export const categoryContext = createContext("computers");

function ProductsSection() {
  let { category } = useParams();
  console.log(category);
  return (
    <div className="xl:container mx-auto">
      <h2 className="font-bold text-4xl text-center mb-12">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-2">
          <ProductsNavNested />
        </div>
        <div className="col-span-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ProductsSection;
