import React from "react";
import Result from "./Result";

const ResultList = ({ result }) => {
  //console.log(result);
  return (
    <ul className="list-disc list-outside px-5">
      {result.meanings.map((d) =>
        d.definitions.map((m, index) => {
          return m.definition && <li key={index}>{m.definition}</li>;
        })
      )}
    </ul>
  );
};

export default ResultList;
