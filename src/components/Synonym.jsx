import React, { useContext } from "react";
import { InputContext } from "../App";

const Synonym = ({ result, fetchData }) => {
  const { inputVal, setInputVal } = useContext(InputContext);

  const handleOnClick = (e) => {
    setInputVal(e.target.innerText);
    // console.log(e.target.innerText);
    fetchData(e.target.innerText); // Pass the clicked synonym, not the current input
  };

  // Collect all synonyms from meanings and definitions
  const allSynonyms = result.meanings.flatMap((meaning) =>
    meaning.synonyms.concat(
      meaning.definitions.flatMap((definition) => definition.synonyms || [])
    )
  );
  //console.log(allSynonyms);
  return (
    <div className="flex gap-1 min-w-[50vw] flex-wrap my-3">
      {allSynonyms.length > 0 ? (
        // Render synonyms if available
        allSynonyms.map((synonym, index) => (
          <span
            key={index} // Unique key for React lists
            onClick={handleOnClick}
            className="list-none bg-slate-200 px-4 py-2 rounded-lg cursor-pointer font-semibold hover:bg-slate-300"
          >
            {synonym}
          </span>
        ))
      ) : (
        // Render "No Synonyms found" only once
        <span>No Synonym available</span>
      )}
    </div>
  );
};

export default Synonym;
