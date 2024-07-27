// src/components/RestrictedAccess.js
import React from "react";

const NotFoundPage = ({ text }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100 text-green-800 p-6">
      <div className="text-center p-6 mx-auto bg-white rounded-xl shadow-lg h-[500px] w-[800px] flex flex-col justify-center items-center gap-8">
        <h1 className="sm:text-5xl text-3xl font-bold mb-4">
          404 - Page Not Found
        </h1>
        <p className="sm:text-xl text-lg text-green-800">{text}</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
