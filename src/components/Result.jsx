import React, { useEffect, useContext, useState } from "react";
import { InputContext } from "../App";
import ResultList from "./ResultList";
import Examples from "./Examples";
import Synonym from "./Synonym";
import Antonym from "./Antonym";
import play from "../assets/play.svg";
import PartOfSpeech from "./PartOfSpeech";
import Phonetics from "./Phonetics";

const Result = () => {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { inputVal, setInputVal } = useContext(InputContext);
  const [audioUrl, setAudioUrl] = useState("");

  const fetchData = async (search) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
      );
      //   console.log(response);
      if (!response.ok) {
        throw new Error("Sorry! Word not found");
      }
      const data = await response.json();
      //   console.log(data);
      setResult(data[0]);
      setError(null);
    } catch (err) {
      setResult("");
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const fetchPronunciation = () => {
    const audio = new Audio(result?.phonetics?.find((p) => p.audio)?.audio);
    audio.play();
    setAudioUrl(audio || "");
  };
  useEffect(() => {
    if (inputVal.length) {
      fetchData(inputVal);
    }
  }, [inputVal]);

  if (loading) {
    return (
      <h3 className="mt-5 text-center text-lg font-bold text-blue">
        Loading...
      </h3>
    );
  }
  if (error) {
    // console.log(error);
    return (
      <h3 className="mt-5 text-center text-lg font-bold text-blue">
        Sorry! Word not found. Try different word.
      </h3>
    );
  }

  return (
    <div className="mx-auto max-w-2xl p-5">
      {inputVal && (
        <div className="flex gap-5 items-center justify-center text-blue w-fit rounded-md px-4 py-3 bg-slate-50 ">
          <img
            className="mt-2 cursor-pointer"
            onClick={fetchPronunciation}
            src={play}
            alt="pronunciation"
          />
          {audioUrl && (
            <audio>
              <source src={audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}

          <h3 className="text-2xl font-bold">{inputVal}</h3>
        </div>
      )}
      {result && (
        <div>
          <h3 className="font-bold mt-3 text-blue text-lg"></h3>
          <Phonetics result={result} />
          <h3 className="font-bold mt-3 text-blue text-lg">Part of Speech:</h3>
          <PartOfSpeech result={result} />
          <h3 className="font-bold mt-3 text-blue text-lg">Definition:</h3>
          <ResultList result={result} />
          <h3 className="font-bold mt-5 text-blue text-lg">Examples:</h3>
          <Examples result={result} />
          {} <h3 className="font-bold mt-5 text-blue text-lg">Synonyms</h3>
          <Synonym result={result} fetchData={fetchData} />
          <h3 className="font-bold mt-5 text-blue text-lg">Antonyms</h3>
          <Antonym result={result} fetchData={fetchData} />
        </div>
      )}
    </div>
  );
};

export default Result;
