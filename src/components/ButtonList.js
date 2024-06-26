import React from "react";
import Button from "./Button";
const List = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Kapil Sharma",
  "News",
  "Love",
  "Comedy",
];
const ButtonList = () => {
  return (
    <div className="flex">
      {List.map((e) => (
        <Button name={e} key={e} />
      ))}
    </div>
  );
};

export default ButtonList;
