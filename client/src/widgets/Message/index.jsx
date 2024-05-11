import "./main.css";

const Message = (props) => {
  return (
    <li
      className={
        props.owner === "USER"
          ? "chat__message-item_user"
          : "chat__message-item_bot"
      }
    >
      {props.message}
    </li>
  );
};

export default Message;
