"use client";

import React, { useState } from "react";
import classes from "./chat.module.css";
import { useSocket } from "../context/SocketProvider";

const ChatWindow: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessages] = useState("");

  const { sendMessage } = useSocket();
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className={`fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-2xl shadow-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all`}
        onClick={toggleChat}
      >
        {isOpen ? "Close" : "Chat"}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-16 right-8 w-80 h-96 bg-white shadow-xl rounded-lg border border-gray-200 flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h2 className="font-semibold">Chat with us</h2>
            <button
              className="text-white hover:text-gray-300 transition"
              onClick={toggleChat}
            >
              &#10005; {/* X icon for closing */}
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="text-gray-500 text-center">
              Start a conversation!
            </div>
            {/* Message bubbles can be dynamically added here */}
            <div className="mt-4">
              <div className="flex justify-start mb-2">
                <div className="bg-gray-200 text-gray-800 p-2 rounded-lg">
                  Hello! How can I help you?
                </div>
              </div>
              <div className="flex justify-end mb-2">
                <div className="bg-blue-600 text-white p-2 rounded-lg">
                  I have a question!
                </div>
              </div>
            </div>
          </div>

          {/* Input Section */}
          <div className="p-3 border-t border-gray-200 bg-gray-100 flex items-center">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 p-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-300"
              onChange={(e) => setMessages(e.target.value)}
            />
            <button
              onClick={() => sendMessage(message)}
              className="ml-2 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-500 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWindow;
