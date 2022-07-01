import React, { useState } from "react";

const SearchInputComponent = ({ search }) => {
  const [totalHeight, setTotalHeight] = useState(0);

  const onChange = (event) => {
    event.preventDefault();
    if (Number(event.target.value) >= 0) {
      setTotalHeight(Number(event.target.value));
    } else {
      alert("Total Height must be greater than 0");
    }
  };

  const onSearch = () => {
    search(totalHeight);
  };

  return (
    <div className="m-5">
      <span className="text-3xl">TotalHeight:</span>
      <input
        className="w-[300px] text-3xl p-2 ml-2"
        type="number"
        onChange={onChange}
        value={totalHeight}
      />
      <button
        className="text-3xl rounded-xl ml-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={onSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchInputComponent;
