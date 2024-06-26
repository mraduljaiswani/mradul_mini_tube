import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames, makeidRandomMesaage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setliveMessage] = useState("");
  const dispatch = useDispatch();
  const chatmessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      // API POLling
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: makeidRandomMesaage(10),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="rounded-lg w-full">
        <div className=" ml-4  h-[570px] bg-gray-100 p-2 border border-black rounded-lg overflow-y-scroll flex flex-col-reverse">
          {/* <ChatMessage name="Mradul Jaiswani" message="This video is very nice" /> */}
          {chatmessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
        <form
          className="flex flex-row rounded-lg"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                name: "Mradul Jaiswani",
                message: liveMessage,
              })
            );
            setliveMessage("");
          }}
        >
          <input
            type="text"
            placeholder="Type your comment here"
            className="rounded-lg p-1 border border-black w-[360px] ml-4 "
            onChange={(e) => {
              setliveMessage(e.target.value);
            }}
            value={liveMessage}
          />
          <button className="rounded-lg bg-slate-200 p-1 border border-black ml-[331px]  w-11 absolute">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default LiveChat;
