import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import useFetch from './useFetch';

function CustomHook() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);

  const getUsers = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "http://jsonplaceholder.typicode.com/users/"
      );
      setUsers(data);
    } catch (ex) {
      setError(ex);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getUsers();
  }, []);
  
  // const { loading, error, users } = useFetch("http://jsonplaceholder.typicode.com/users/");

  return (
    <div>
      <div>
        <span>{loading ? 'loading' : 'loaded'}</span>
      </div>
      <div>
        <span>{error ? error : 'Found 0 error'}</span>
      </div>
      <div>
        <span>{users.length}</span>
      </div>
    </div>
  );
}

export default CustomHook;
