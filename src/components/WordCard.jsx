import React from "react";
import { useState, useEffect } from "react";
const WordCard = ({ input, fetchApi, error }) => {
  const [wordData, setWordData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchWord = async () => {
      const data = await fetchApi(input);
      setLoading(true);
      setLoading(false);
      setWordData(data);
    };
    if (input) fetchWord();
  }, [input, fetchApi]);
  if (loading) {
    return (
      <div className="mt-8">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="mt-8">
      {error ? (
        <div className=""></div>
      ) : (
        <h1 className="text-3xl font-bold dark:text-whiteCustom">{input}</h1>
      )}
    </div>
  );
};

export default WordCard;
