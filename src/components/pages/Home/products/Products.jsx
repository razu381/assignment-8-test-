import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { categoryContext } from "./ProductsSection";
import Product from "./Product";

function Products() {
  let [productData, setProductData] = useState([]);
  let { category } = useParams();

  useEffect(() => {
    fetch("ProductData.json")
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, []);

  let currData = productData.filter((item) => {
    return item.category === category;
  });
  console.log(currData);

  return (
    <div className="grid grid-cols-3 gap-6">
      {currData.map((data) => (
        <Product key={data.id} data={data} />
      ))}
    </div>
  );
}

export default Products;
