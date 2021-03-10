import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(url);
      setUsers(data);
    } catch (ex) {
      setError(ex);
    }
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, [url]);

  return { loading, error, users };
};

export default useFetch;
