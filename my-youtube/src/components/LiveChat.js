import React, { useEffect, useState, useRef } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import generateRandomName, { makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, [dispatch]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [ChatMessages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (liveMessage.trim()) {
      dispatch(
        addMessage({
          name: "You",
          message: liveMessage,
        })
      );
      setLiveMessage("");
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-2xl shadow-large border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
          <h3 className="font-semibold">Live Chat</h3>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
        {ChatMessages.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            <p>No messages yet. Start the conversation!</p>
          </div>
        ) : (
          <>
            {ChatMessages.map((c, index) => (
              <ChatMessage key={index} name={c.name} message={c.message} />
            ))}
            <div ref={chatEndRef} />
          </>
        )}
      </div>

      {/* Input Form */}
      <form
        onSubmit={handleSubmit}
        className="p-4 border-t border-gray-200 bg-white"
      >
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 px-4 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
            placeholder="Type a message..."
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
          />
          <button
            type="submit"
            className="px-6 py-2.5 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors active:scale-95 shadow-md"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default LiveChat;
