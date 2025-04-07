import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import WordCard from "../components/WordCard";
import ErrorMessage from "../components/ErrorMessage";
import { useNavigate } from "react-router-dom";
const DictionaryPage = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const [synonym, setSynonym] = useState("");
  const [bodyContent, setBodyContent] = useState(null);
  const fetchApi = async (input) => {
    if (!input) return;
    try {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`,
      );

      if (!res.ok) {
        if (res.status === 404) {
          throw new Error("Word not found");
        } else {
          throw new Error("Something went wrong");
        }
      }

      const data = await res.json();
      return data;
    } catch (error) {
      setError(error.message); // Set the error message if API fails
      console.log(error);
      return null;
    }
  };

  // Clear error when input changes to trigger a new API call
  useEffect(() => {
    if (input) {
      setError(null); // Reset error before making a new request
    }
  }, [input]);
  useEffect(() => {
    if (error) {
      navigate("/error");
    }
  }, [error, navigate]);
  const clearBodyContent = () => {
    setBodyContent(null);
  };
  return (
    <div className="container max-w-[1024px] mx-auto p-4 md:p-6 lg:p-10">
      <Navbar navigate={navigate} />
      <div className="mt-12">
        <SearchBar input={input} setInput={setInput} />
      </div>

      {bodyContent && error ? (
        <ErrorMessage message={error} />
      ) : (
        <WordCard
          clearBodyContent={clearBodyContent}
          synonym={synonym}
          setSynonym={setSynonym}
          input={input}
          setInput={setInput}
          fetchApi={fetchApi}
          error={error}
          setError={setError}
          navigate={navigate}
        />
      )}
    </div>
  );
};

export default DictionaryPage;
