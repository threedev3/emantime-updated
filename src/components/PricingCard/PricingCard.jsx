import React, { useState } from "react";
import priceImg from "../../assets/img/priceimg.png";
import TrialModal from "../trialModal/TrialModal";

function PricingCard({ title, price, description, features }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="bg-white  rounded-xl shadow-3xl flex flex-col gap-3 relative hover:scale-110 hover:transition-all hover:ease-out duration-200">
      <div className="bg-gradient-to-r from-btnGradLeft to-btnGradRight p-6 rounded-t-xl">
        <h3 className="text-2xl font-medium text-bannerText mb-3">{title}</h3>
        <p className="text-4xl font-semibold  text-white">{price}</p>
      </div>
      <div className="pt-4 px-6 pb-0">
        <p className="text-black mb-4 text-base">{description}</p>
        <ul className="mb-8">
          {features.map((feature, index) => (
            <li
              key={index}
              className="mb-2 text-black flex items-center gap-2 justify-start text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 stroke-green-700 h-7 w-7 mr-2 flex-shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <div className="">{feature}</div>
            </li>
          ))}
        </ul>
        <div className="flex justify-center mb-12 cursor-pointer z-50">
          <button
            className="bg-transparent text-green-900 border-2 border-green-900 py-2 px-4 rounded-full font-semibold cursor-pointer z-50"
            onClick={() => setOpenModal(true)}
          >
            Get Enrolled
          </button>
        </div>
        <div className="absolute bottom-0 right-0">
          <img src={priceImg} alt="" />
        </div>
      </div>

      {openModal ? (
        <TrialModal openModal={openModal} setOpenModal={setOpenModal} />
      ) : null}
    </div>
  );
}

export default PricingCard;
