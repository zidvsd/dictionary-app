import React from "react";
import { useNavigate } from "react-router-dom";
const ErrorMessage = ({ message }) => {
  return (
    <div className="w-full flex-col container text-violet-600 flex items-center justify-center mx-auto mt-12 ">
      <h1 className="font-bold  text-5xl text-center">Error 404</h1>
      <p className="mt-4">{message}</p>
    </div>
  );
};

export default ErrorMessage;
