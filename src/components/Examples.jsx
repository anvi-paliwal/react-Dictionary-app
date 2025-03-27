import React from "react";

const Examples = ({ result }) => {
  // Collect all examples from meanings and definitions
  const allExamples = result.meanings.flatMap((meaning) =>
    meaning.definitions.flatMap((definition) => definition.example || [])
  );
  ///console.log(allExamples);
  return (
    <ul className="list-disc list-outside px-5">
      {allExamples.length > 0 ? (
        // Display each example if they exist
        allExamples.map((example, index) => <li key={index}>{example}</li>)
      ) : (
        // Show "No example available" only once
        <span>No example available</span>
      )}
    </ul>
  );
};

export default Examples;
