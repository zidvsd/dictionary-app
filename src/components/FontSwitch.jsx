import React from "react";
import arrowDown from "../assets/images/icon-arrow-down.svg";
import { useEffect } from "react";

const FontSwitch = ({ font, setFont }) => {
  useEffect(() => {
    document.body.classList.remove("font-inter", "font-roboto", "font-noto");
    // Add the new font class
    document.body.classList.add(`font-${font.toLowerCase().replace(" ", "-")}`);
  }, [font]);
  return (
    <div>
      <button
        className="font-semibold btn transition-all duration-200 ease-in-out border-none bg-none gap-x-4 text-blackCustom text-2xl dark:text-whiteCustom"
        popoverTarget="popover-1"
        style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
      >
        {font}
        <img src={arrowDown} alt="" />
      </button>

      <ul
        className="dropdown  menu w-auto pr-18 rounded-lg  bg-whiteCustom dark:bg-blackCustom space-y-2 shadow-[0px_-2px_40px_0px_#4d179a] text-white "
        popover="auto"
        id="popover-1"
        style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}
      >
        <li
          className="dark:text-whiteCustom text-nowrap   active:bg-transparent dark:active:bg-transparent hover:text-violet-600 cursor-pointer"
          onClick={() => setFont("Inter")}
        >
          Inter
        </li>
        <li
          className="dark:text-whiteCustom text-nowrap  active:bg-transparent dark:active:bg-transparent hover:text-violet-600 cursor-pointer"
          onClick={() => setFont("Roboto")}
        >
          Roboto
        </li>
        <li
          className="dark:text-whiteCustom active:bg-transparent dark:active:bg-transparent hover:text-violet-600 cursor-pointer"
          onClick={() => setFont("Noto")}
        >
          Noto Sans
        </li>
      </ul>
    </div>
  );
};

export default FontSwitch;
