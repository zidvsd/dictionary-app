import React from "react";
import { useNavigate } from "react-router-dom";
const WordInfo = ({
  navigate,
  wordData,
  input,
  synonym,
  setSynonym,
  fetchApi,
  setInput,
}) => {
  const handleSynonym = (synonym) => {
    // Set synonym and also update the input state to trigger a new fetch
    setSynonym(synonym);
    setInput(synonym); // Update the input to the synonym so it re-fetches the word data
  };
  const navigateSynonym = (synonym) => {
    navigate(`/${synonym}`);
  };

  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-5xl font-bold dark:text-whiteCustom tracking-wider">
            {input}
          </h1>
        </div>
        {/* pronounciation */}
        <p className="text-violet-600 text-xl tracking-widest">
          {wordData[0].phonetic}
        </p>
      </div>
      {/* type */}
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-6 justify-start items-start">
          {wordData[0].meanings.map((word, index) => (
            <div
              className="dark:text-whiteCustom  flex flex-col items-start justify-start w-full"
              key={index}
            >
              <div className="w-full flex flex-row items-center">
                <span className=" text-xl flex flex-col italic font-bold">
                  {" "}
                  {word.partOfSpeech}
                </span>
                {/* divider */}
                <span className="w-full h-[1px] ml-8 bg-grayCustom opacity-50"></span>
              </div>
              <ol className="font-light mt-6 text-md ">Meaning</ol>
              {word.definitions.map((meaning, i) => (
                <li className="mt-2 marker:text-violet-600" key={i}>
                  {meaning.definition}
                </li>
              ))}
              <div className="flex flex-row space-x-6 items-center mt-5">
                <span className="dark:text-whiteCustom opacity-50 text-lg">
                  Synonyms
                </span>
                {word.synonyms.length > 0 ? (
                  word.synonyms.map((synonym, i) => (
                    <a
                      onClick={() => {
                        handleSynonym(synonym);
                        navigateSynonym(synonym);
                      }}
                      key={i}
                      className="text-violet-600"
                    >
                      {synonym}
                    </a>
                  ))
                ) : (
                  <span className="text-violet-600">No synonym found</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WordInfo;
