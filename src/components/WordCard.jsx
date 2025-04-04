import React, { useState, useEffect } from "react";
import Error from "./ErrorMessage";
import WordInfo from "./WordInfo";
const WordCard = ({
  input,
  fetchApi,
  error,
  setError,
  synonym,
  setSynonym,
}) => {
  const [wordData, setWordData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchWord = async () => {
      setLoading(true);
      try {
        const data = await fetchApi(input);
        if (data) {
          setWordData(data); // Set word data if fetched successfully
          setError(null); // Reset error if data is fetched
        }
      } catch (err) {
        setError(err.message); // Set error if API call fails
        setWordData(null); // Clear word data if error occurs
      } finally {
        setLoading(false); // Set loading state to false once the fetch is complete
      }
    };

    if (input) {
      setWordData(null); // Clear previous word data before making a new fetch
      setError(null); // Clear any previous errors
      fetchWord(); // Start fetching the word data
    }
  }, [input, fetchApi, setError]);

  return (
    <div className="mt-8">
      {loading ? (
        <p className="text-blackCustom dark:text-violet-600">Loading...</p> // Show loading message while fetching data
      ) : error ? (
        <Error message={error} /> // Show error message if there is an error
      ) : (
        wordData && (
          <>
            <WordInfo wordData={wordData} input={input} synonym={synonym} />
          </>
        )
      )}
    </div>
  );
};

export default WordCard;
