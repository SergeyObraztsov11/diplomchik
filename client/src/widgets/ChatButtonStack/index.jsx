import { useContext, useEffect } from "react";
import ChatContext from "./../../app/context";
import "./main.css";

const ChatButtonStack = (props) => {
  const chatContext = useContext(ChatContext);
  const { socket } = props;

  const onClick = (e) => {
    if (socket === undefined || socket === null) return;

    console.log(e.target.value)

    socket.current.emit("chat message", {
      owner: "USER",
      message: e.target.value,
    });
  };

  return (
    <div className="chat__button-stack">
      {Array.isArray(chatContext.chat.chat.buttons) &&
        chatContext.chat.chat.buttons.length > 0 &&
        chatContext.chat.chat.buttons.map((button, index) => (
          <button
            value={button.command}
            onClick={onClick}
            className="chat__button"
            key={index}
          >
            {button.title}
          </button>
        ))}
    </div>
  );
};

export default ChatButtonStack;
