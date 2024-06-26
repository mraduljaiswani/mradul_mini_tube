import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";
import Demo2 from "./Demo2";

const Demo = () => {
  const [text, setText] = useState(0);
  const [darkTheme, setdarkTheme] = useState(false);
  const prime = useMemo(() => findNthPrime(text), [text]);

  return (
    <>
      <div
        className={
          "p-2 m-2  w-full h-96 border border-black " +
          (darkTheme && "bg-gray-400 text-black")
        }
      >
        <div>
          <input
            className="p-2 m-2  w-80 h-7 border border-black"
            type="number"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className={
              " m-2  w-80 h-7 border border-black bg-blue-300 " +
              (darkTheme && "bg-blue-950 text-white")
            }
            onClick={() => {
              setdarkTheme(!darkTheme);
            }}
          >
            DARK THEME
          </button>
          <h1 className="font-bold p-3 m-4">nth prime: {prime}</h1>
        </div>
      </div>
      <Demo2 />
    </>
  );
};

export default Demo;
