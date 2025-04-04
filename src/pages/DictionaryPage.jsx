import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import WordCard from "../components/WordCard";
import { useState, useEffect } from "react";
import Error from "../components/Error";
const DictionaryPage = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const fetchApi = async () => {
    if (!input) return;
    try {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`,
      );

      if (!res.ok) {
        if (res.status === "404") {
          throw new Error("Word not found");
        } else {
          throw new Error("Something went wrong");
        }
      }
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="container  max-w-[1024px] mx-auto p-4 md:p-6 lg:p-10">
      <Navbar />
      <div className="mt-12">
        <SearchBar input={input} setInput={setInput} />
      </div>
      {error && <Error message={error} />}
      <WordCard input={input} fetchApi={fetchApi} error={error} />
    </div>
  );
};

export default DictionaryPage;
