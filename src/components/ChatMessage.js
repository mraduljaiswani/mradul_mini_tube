import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex">
      <img
        className="w-8 h-8"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt=""
      />
      <span className="font-bold px-2">{name}</span>
      <span className="ml-1 ">{message}</span>
    </div>
  );
};

export default ChatMessage;
