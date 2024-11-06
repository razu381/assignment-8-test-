import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailCard from "./DetailCard";

function ProductDetail() {
  let { productId } = useParams();
  productId = parseInt(productId);
  let [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("/ProductData.json")
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, []);

  let currData = productData.find((item) => item.id === productId);
  if (currData) {
    console.log(currData.product_title);
  }
  return (
    <div>
      <div className="bg-primary-gadget pt-10 pb-64 z-0">
        <div className="mx-[10%] flex flex-col items-center text-white">
          <h2 className="font-bold text-3xl py-5">Product Details</h2>
          <p>
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>
      <div className=" lg:container mx-auto z-10 -mt-52 mb-28">
        {currData ? <DetailCard currData={currData} /> : "Loading"}
      </div>
    </div>
  );
}

export default ProductDetail;
