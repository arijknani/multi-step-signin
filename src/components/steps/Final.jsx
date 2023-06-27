import React from "react";

export default function Final() {
  return (
    <div className="container md:mt-10">
      <div className="flex flex-col items-center">
        <svg
          className="w-24 h-24"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.293 11.293L4.647 8.646a.5.5 0 0 1 0-.708l1.414-1.414a.5.5 0 0 1 .708 0L8 7.586l4.232-4.232a.5.5 0 0 1 .708 0l1.414 1.414a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708 0z"
            clipRule="evenodd"
          />
        </svg>

        <div className="mt-3 text-xl font-semibold uppercase text-green-500">
          Congrats!!!!!
        </div>
        <div className="text-lg font-semibold text-gray-500">
          Your account has been created
        </div>
        <a className="mt-10" href="/">
          <button className="h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100">
            Close
          </button>
        </a>
      </div>
    </div>
  );
}
