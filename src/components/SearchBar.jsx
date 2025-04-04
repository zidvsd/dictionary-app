import React from "react";

const SearchBar = ({ input, setInput }) => {
  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      const newInput = e.target.value;
      setInput(newInput);
      console.log("Enter key pressed", input);
    }
  };
  return (
    <div className="w-full">
      <label className="relative w-full">
        <input
          onKeyUp={handleKeyUp}
          type="search"
          required
          placeholder="Search"
          className="w-full p-2 dark:text-white pl-10 border focus:border-violet-400 border-grayCustom rounded-xl  focus:outline-none focus:border-2 dark:focus:border"
        />
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-[1em] h-[1em] opacity-100 stroke-black dark:stroke-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
      </label>
    </div>
  );
};

export default SearchBar;
