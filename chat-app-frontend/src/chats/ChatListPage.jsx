import { Link } from "react-router-dom";

export const ChatListPage = () => {
  return (
    <div className="container">
      <h1>Chats List</h1>
      <hr />
      <h1>Chats will be shown here - TBD</h1>
      <Link to="/new-chat">
        <button className="btn btn-primary">New Chat</button>
      </Link>
    </div>
  );
};
