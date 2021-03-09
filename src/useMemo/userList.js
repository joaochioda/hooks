import React, { useMemo } from "react";

function UserList({ users, query }) {
  function filter() {
    console.log("---filter---");
    return users.filter((user) => user.name.toLowerCase().includes(query));
  }

  const filtered = filter();
  // const filtered = useMemo(() => filter(), [users, query]);

  return filtered.map((user) => <div key={user.id}>{user.name}</div>);
}

export default UserList;
