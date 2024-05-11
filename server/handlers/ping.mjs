const handle = (message) => {
  message.message = "pong";
  return message;
};

export const ping = { handle };
