import React from "react";
import { Link } from "react-router-dom";

function Product({ data }) {
  let { id, product_image, product_title, price } = data;

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl p-5 mb-24">
        <figure>
          <img src={product_image} alt={product_title} className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="font-semibold text-2xl">{product_title}</h2>
          <p className="text-text-gadget text-opacity-60 font-semibold text-lg">
            Price: {price}$
          </p>
          <div className="card-actions">
            <Link to={`/products/${id}`}>
              <button className="btn btn-outline border border-primary-gadget text-primary-gadget rounded-full font-semibold text-lg">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
