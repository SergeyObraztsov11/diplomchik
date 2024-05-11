import {
  useEffect,
  useState,
  useRef,
  useLayoutEffect,
  useContext,
} from "react";
import Message from "../Message";
import ChatContext from "./../../app/context";
import "./main.css";

const ChatView = () => {
  const messagesRef = useRef(null);
  const chatContext = useContext(ChatContext);

  useLayoutEffect(() => {
    if (messagesRef.current === null) return;

    messagesRef.current.scrollTo(0, messagesRef.current.scrollHeight);
  }, [chatContext]);

  return (
    <ul ref={messagesRef} className="chat__message">
      {Array.isArray(chatContext.chat.chat.messages) &&
        chatContext.chat.chat.messages !== undefined &&
        chatContext.chat.chat.messages.map((message, index) => (
          <Message
            key={index}
            owner={message.owner}
            message={message.message}
          />
        ))}
    </ul>
  );
};

export default ChatView;
