import React from "react";

const Phonetics = ({ result }) => {
  const allPhonetics = [
    ...(result.phonetic ? [result.phonetic] : []), // Handle singular `phonetic`
    ...result.phonetics.map((p) => p.text || []), // Handle array `phonetics`
  ];
  // console.log(allPhonetics);
  const uniquePhonetic = [
    ...new Set(allPhonetics.filter((p) => p.length > 0).map((p) => p)),
  ];
  //console.log(uniquePhonetic);

  return (
    <div className="flex gap-1 min-w-[50vw] flex-wrap my-3">
      {uniquePhonetic.length > 0 ? (
        uniquePhonetic.map((p, index) => {
          if (p) {
            return (
              <li
                key={index}
                className="list-none bg-slate-200 px-4 py-2 rounded-lg font-semibold "
              >
                {p}
              </li>
            );
          }
        })
      ) : (
        <span>No phonetic available</span>
      )}
    </div>
  );
};

export default Phonetics;
