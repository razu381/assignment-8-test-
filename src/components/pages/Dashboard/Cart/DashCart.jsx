import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../../RootComp";
import SingleItemCart from "./SingleItemCart";
import { Navigate, useNavigate } from "react-router-dom";
import PaymentModal from "./PaymentModal";

function DashCart({ productData }) {
  const navigate = useNavigate();
  //Get all cart data
  let [cart, setCart] = useContext(cartContext);
  console.log(cart);

  let [totalPrice, setTotalPrice] = useState(0);
  let [cartedProducts, setCartedProducts] = useState([]);

  useEffect(() => {
    if (productData) {
      let cartedArr = [];
      let tempPrice = 0;

      cart.forEach((id) => {
        let obj = productData.find((product) => product.id == id);
        if (obj) {
          cartedArr.push(obj);
          tempPrice += obj.price;
        }
      });
      setCartedProducts(cartedArr);
      setTotalPrice(tempPrice);
    }
  }, [cart, productData]);

  function sortPrice() {
    let sorted = [...cartedProducts].sort((a, b) => b.price - a.price);
    setCartedProducts(sorted);
  }

  function purchase() {
    my_modal_1.showModal();
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-bold text-2xl">Cart</h1>
        </div>
        <div className="flex items-center gap-4">
          <h2 className="font-bold text-2xl">Total cost: {totalPrice}</h2>
          <button
            onClick={sortPrice}
            className="font-semibold text-lg flex gap-1 btn border border-primary-gadget text-primary-gadget bg-transparent rounded-full"
          >
            Sort by price
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#9538e2"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
              />
            </svg>
          </button>
          <button
            disabled={
              totalPrice == 0 && cartedProducts.length == 0 ? true : false
            }
            onClick={purchase}
            className="font-semibold text-lg btn rounded-full bg-primary-gadget text-white"
          >
            purchase
          </button>
        </div>
      </div>

      <div>
        {cartedProducts
          ? cartedProducts.map((product, idx) => (
              <SingleItemCart product={product} key={idx} />
            ))
          : null}
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex flex-col items-center">
          <img src="/assets/Group.png" alt="" className="mx-auto" />
          <h3 className="font-bold text-lg text-center">Payment successfull</h3>
          <h4 className="text-center">Total amount: {totalPrice}</h4>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={() => {
                  navigate("/");
                  setCart([]);
                }}
                className="text-center bg-primary-gadget px-10 py-3 rounded-full text-white"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default DashCart;
