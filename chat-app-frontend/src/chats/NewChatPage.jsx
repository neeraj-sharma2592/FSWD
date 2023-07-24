import { useState } from "react";
import { postApi } from "../api/postApi";
import { useGetCall } from "../api/useGetCall";
import { useUserDetails } from "./../authentication";
import { useNavigate } from "react-router-dom";

export const NewChatPage = () => {
  const [name, setName] = useState("");
  const { user: currentUser } = useUserDetails();
  const { isLoading, data: users } = useGetCall("/users", []);
  const [members, setMembers] = useState([]);
  const navigate = useNavigate();

  const add = (id) => {
    setMembers([...members, id]);
  };

  const createGroup = async (currentUserId) => {
    const res = await postApi("/new-chat", {
      name,
      memberIds: [...members, currentUser],
    });

    const newChatId = await res.json();
    navigate(`/chat/${newChatId}`);
  };

  return (
    <div className="container">
      <h1>New Chat</h1>
      <hr />
      <input
        className="form-control"
        type="text"
        placeholder="Enter a name for the group/chat"
        onChange={(e) => setName(e.target.value)}
      />
      <h3 className="mt-3">Add users</h3>
      <ul className="list-group mt-3">
        {users.map((user) => (
          <li className="list-group-item" key={user.id}>
            <label>{user.name}</label>
            {members.includes(user.id) || user.id == currentUser.uid ? (
              <button
                onClick={() => add(user.id)}
                style={{
                  float: "right",
                }}
                className="btn btn-primary"
                disabled
              >
                Added!
              </button>
            ) : (
              <button
                onClick={() => add(user.id)}
                style={{
                  float: "right",
                }}
                className="btn btn-primary"
              >
                Add
              </button>
            )}
          </li>
        ))}
      </ul>
      <button
        onClick={() => createGroup(currentUser.uid)}
        className="btn btn-primary mt-3"
      >
        Create Group
      </button>
    </div>
  );
};
