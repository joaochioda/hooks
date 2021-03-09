import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import UserList from "./userList";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);

  const getUsers = useCallback(async () => {
    const { data } = await axios.get(
      "http://jsonplaceholder.typicode.com/users/"
    );
    setUsers(data);
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div>
      <input type="text" onChange={(val) => setQuery(val.target.value)} />
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <UserList users={users} query={query} />
    </div>
  );
}

export default UseMemo;
