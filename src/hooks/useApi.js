import { useState, useEffect } from "react";
import api from "../utils/api";

const useApi = (path, prefetch = true) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [refreshCnt, setRefreshCnt] = useState(1);

  const refresh = () => {
    setRefreshCnt(refreshCnt + 1);
  };

  const get = async () => {
    setIsLoading(true);
    const { data = null, error = null } = await api(path);
    if (data) {
      setData(data);
    }
    if (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  const post = async (body) => {
    setIsLoading(true);
    setData(null);
    setError(null);
    const { data = null, error = null } = await api(path, {
      method: "POST",
      body,
    });
    if (data) {
      setData(data);
    }
    if (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (prefetch) {
      get(path);
    }

    // eslint-disable-next-line
  }, [path, refreshCnt, prefetch]);

  return { get, post, data, error, isLoading, refresh };
};

export default useApi;
