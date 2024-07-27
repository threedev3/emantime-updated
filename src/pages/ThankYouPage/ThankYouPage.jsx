import React from "react";
import { Link } from "react-router-dom";

function ThankYouPage() {
  return (
    <div className="flex items-center justify-center min-h-[90vh] text-btnGradRight bg-green-100 p-4">
      <div className="p-6 shadow-lg h-[400px] w-[700px] flex flex-col justify-center items-center gap-8 rounded-xl bg-white">
        <div>
          <h3 className="sm:text-4xl text-xl font-bold text-center">
            Thank You for registration
          </h3>
        </div>

        <div>
          <p className="text-center sm:text-lg text-base">
            You will be contacted shortly by our team
          </p>
        </div>

        <Link to="/">
          <button className="py-3 px-6 bg-gradient-to-r from-btnGradRight to-btnGradLeft text-white rounded-lg">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ThankYouPage;
