import React from "react";
import Navbar from "../../header/Navbar";
import VRglassSection from "../Home/VRglassSection";
function Hero() {
  return (
    <div>
      <div className="hero py-52 lg:py-64 bg-primary-gadget xl:container mx-auto rounded-[32px]">
        <div className=""></div>
        <div className="hero-content max-w-max text-white text-center">
          <div className="lg:container mx-auto">
            <h1 className="mb-5 text-6xl font-bold">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="mb-5">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="btn bg-white rounded-[32px] font-bold text-xl">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <VRglassSection />
    </div>
  );
}

export default Hero;
