import React from "react";

const PartOfSpeech = ({ result }) => {
  const uniquePartOfSpeech = [
    ...new Set(result.meanings.map((p) => p.partOfSpeech)),
  ];
  // console.log(uniquePartOfSpeech);
  return (
    <div className="flex gap-1 min-w-[50vw] flex-wrap my-3">
      {uniquePartOfSpeech.map((p, index) => {
        return (
          <li
            key={index}
            className="list-none bg-slate-200 px-4 py-2 rounded-lg font-semibold "
          >
            {p}
          </li>
        );
      })}
    </div>
  );
};

export default PartOfSpeech;
