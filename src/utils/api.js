const api = async (path, options = {}) => {
  options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
    body: options.body ? JSON.stringify(options.body) : null,
  };
  const resp = await fetch(`/api/${path}`, options);

  if (resp.ok) {
    if (resp.statusText === "No Content") {
      return {};
    }
    return { data: await resp.json() };
  }
  const contentType = resp.headers.get("content-type");
  if (contentType && contentType.indexOf("application/json") >= 0) {
    return { error: await resp.json() };
  }

  return { error: `Error: ${resp.statusText}` };
};

export default api;
