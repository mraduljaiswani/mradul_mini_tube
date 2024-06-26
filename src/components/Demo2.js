import React, { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  const [y, sety] = useState(0);

  let x = 0;
  const ref = useRef(0);
  const i = useRef(null);
  useEffect(() => {
    i.current = setInterval(() => {
      console.log("abc", Math.random());
    }, 1000);
    return () => clearInterval(i.current);
  }, []);
  return (
    <div className={"p-2 m-2  w-full h-96 border border-black "}>
      <div>
        <button
          onClick={() => {
            x = x + 1;
            console.log("x = " + x);
          }}
          className=" p-2 m-2 bg-green-200"
        >
          {" "}
          Increse x
        </button>
        <span>{"Normal Variable = " + x}</span>
      </div>

      <div>
        <button
          onClick={() => {
            sety(y + 1);
            console.log("y = " + y);
          }}
          className=" p-2 m-2 bg-green-200"
        >
          {" "}
          Increse y
        </button>
        <span>{"State Variable = " + y}</span>
      </div>

      <div>
        <button
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref.current = " + ref.current);
          }}
          className=" p-2 m-2 bg-green-200"
        >
          {" "}
          Increse z
        </button>
        <span>{"ref = " + ref.current}</span>
      </div>
      <button
        onClick={() => {
          clearInterval(i.current);
          console.log("interval Stopped");
        }}
        className="p-2 m-2 bg-red-400"
      >
        {" "}
        STOP PRINTING
      </button>
    </div>
  );
};

export default Demo2;
