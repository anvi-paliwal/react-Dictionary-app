import React, { useContext, useState } from "react";
import { InputContext } from "../App";

const Header = () => {
  const [word, setWord] = useState("");
  const { inputVal, setInputVal } = useContext(InputContext);
  // console.log(inputVal);

  const handleChange = (e) => {
    // console.log(e.target.value);
    setWord(e.target.value);
  };
  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  const handleSearch = () => {
    setInputVal(word);
    setWord(" ");
  };
  return (
    <div className="flex flex-col items-center bg-slate-800   justify-center py-10 space-y-3">
      <h2 className="text-2xl font-bold text-white">Dictionary</h2>
      <div className="flex border border-white rounded-sm gap-1 sm:w-xl mt-3 justify-between bg-zinc-50">
        <input
          className=" outline-none px-1 sm:w-lg"
          type="text"
          placeholder="Enter Word"
          onChange={handleChange}
          onKeyDown={handleOnKeyDown}
          value={word}
        />
        <button
          className="bg-sky-700 rounded-sm px-5 py-3 text-white cursor-pointer hover:bg-sky-900"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
