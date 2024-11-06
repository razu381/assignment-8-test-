import React from "react";

function SingleItemCart({ product }) {
  let { product_image, product_title, description, price } = product;
  return (
    <div className="bg-white rounded-2xl p-8 grid grid-cols-12 mb-5">
      <img
        src={`/${product_image}`}
        alt="product_title"
        className="col-span-2 max-h-32 rounded-2xl"
      />
      <div className="col-span-8 space-y-4">
        <h2 className="font-semibold text-2xl">{product_title}</h2>
        <p className="font-lg text-text-gadget text-opacity-60">
          {description}
        </p>
        <h3 className="font-semibold text-xl">Price: ${price}</h3>
      </div>
      <div className="col-span-2 justify-self-end">
        <button className="btn btn-circle btn-outline border border-red-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#FF0000"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SingleItemCart;
