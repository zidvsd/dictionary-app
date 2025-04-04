import React from "react";
import dictionarylogo from "../assets/images/dictionary-favicon.png";
import FontSwitch from "./FontSwitch";
import DarkModeToggle from "./DarkModeToggle";
import { useState } from "react";
const Navbar = () => {
  const [font, setFont] = useState("Inter");
  return (
    <nav className="flex flex-row justify-between items-center">
      <div className="left-nav">
        <img src={dictionarylogo} className="size-16 cursor-pointer" alt="" />
      </div>
      <div className="right-nav flex flex-row  justify-end gap-x-4 items-center">
        <FontSwitch font={font} setFont={setFont} />
        <div className="h-10 w-[1px] bg-grayCustom "></div>
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
