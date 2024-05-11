import { createContext } from "react";

export const initial = {
  chat: {
    user: null,
    lastRequest: null,
    buttons: [],
    messages: [],
  },
  setChat: (data) => {},
};

const ChatContext = createContext(initial);

export default ChatContext;
