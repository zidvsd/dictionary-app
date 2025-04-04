import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import WordCard from "../components/WordCard";
const DictionaryPage = () => {
  return (
    <div className="container max-w-[1024px] mx-auto p-4 md:p-6 lg:p-10">
      <Navbar />
      <SearchBar />
      <WordCard />
    </div>
  );
};

export default DictionaryPage;
