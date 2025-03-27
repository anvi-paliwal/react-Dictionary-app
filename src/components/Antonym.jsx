import React, { useContext } from "react";
import { InputContext } from "../App";

const Antonym = ({ result, fetchData }) => {
  const { inputVal, setInputVal } = useContext(InputContext);

  const handleOnClick = (e) => {
    setInputVal(e.target.innerText);
    // console.log(e.target.innerText);
    fetchData(e.target.innerText); // Pass the clicked antonym, not the current input
  };

  // Collect all antonyms from meanings and definitions
  const allAntonyms = result.meanings.flatMap((meaning) =>
    meaning.antonyms.concat(
      meaning.definitions.flatMap((definition) => definition.antonyms || [])
    )
  );

  return (
    <div className="flex gap-1 min-w-[50vw] flex-wrap my-3">
      {allAntonyms.length > 0 ? (
        // Render antonyms if available
        allAntonyms.map((antonym, index) => (
          <span
            key={index} // Unique key for React lists
            onClick={handleOnClick}
            className="list-none bg-slate-200 px-4 py-2 rounded-lg cursor-pointer font-semibold hover:bg-slate-300"
          >
            {antonym}
          </span>
        ))
      ) : (
        // Render "No Antonyms found" only once
        <span>No Antonym available</span>
      )}
    </div>
  );
};

export default Antonym;
