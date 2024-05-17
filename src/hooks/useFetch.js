import axios from "axios";
import { useState } from "react";

const useFetch = (parameter) => {
  const [state, setState] = useState(null);
  const [hasError, setHasError] = useState(false);
  const url = `https://tickets-back.onrender.com/api/v1/${parameter}`;

  const postData = async (body) => {
    try {
      const res = await axios.post(url, body);
      setHasError(false);
      setState(res.data);
    } catch (err) {
      setHasError(true);
      console.error(err);
    }
  };

  return [state, postData, hasError];
};

export default useFetch;
