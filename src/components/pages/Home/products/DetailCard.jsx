import { FaStar } from "react-icons/fa";
import { StarRating } from "react-star-rating-input";
import { css } from "react-star-rating-input";
import insertCss from "insert-css";
import { useContext } from "react";
import { cartContext, wishContext } from "../../../RootComp";
insertCss(css);

function DetailCard({ currData }) {
  // console.log(currData);
  let {
    id,
    product_title,
    product_image,
    price,
    description,
    Specification,
    availability,
    rating,
  } = currData;

  let [cart, setCart] = useContext(cartContext);
  let [wish, setWish] = useContext(wishContext);

  return (
    <div className="bg-white rounded-[32px] flex gap-8 p-8 ">
      <img
        src={`/${product_image}`}
        alt={product_title}
        className="rounded-[32px] max-h-[500px]"
      />
      <div className="space-y-3">
        <h2 className="font-semibold text-3xl">{product_title}</h2>
        <p className="font-semibold text-xl">Price: ${price}</p>
        <div
          className={`${
            availability
              ? "bg-[#309C08] bg-opacity-10 text-[#309C08]"
              : "bg-red-500]"
          } w-fit py-2 px-5 rounded-full  border border-[#309C08]`}
        >
          {availability ? "In stock" : "out of stock"}
        </div>
        <p className="text-lg">{description}</p>
        <h3 className="font-bold text-lg">Specification</h3>
        {Specification.map((spec, index) => (
          <p className="text-lg text-text-gadget text-opacity-60" key={index}>
            {index + 1}. {spec}
          </p>
        ))}
        <h3 className="font-bold text-lg flex gap-2 items-center">
          Rating <FaStar color="#F9C004"></FaStar>
        </h3>
        <div className="flex gap-3 items-center">
          <StarRating value={rating} />
          <span className="bg-text-gadget bg-opacity-5 py-2 px-6 rounded-full">
            {rating}.0
          </span>
        </div>
        <div className="flex gap-5">
          <button
            onClick={() => setCart([...cart, id])}
            className="btn bg-primary-gadget text-white fontn-bold text-lg rounded-full py-3 px-6"
          >
            Add to cart
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </button>
          <button
            onClick={() => setWish([...wish, id])}
            className="btn btn-circle btn-outline border border-text-gadget border-opacity-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
