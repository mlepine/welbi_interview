import React from "react";

const Loading = ({ isLoading }) => (
  <>{isLoading && <div className="my-auto mt-4">Loading...</div>}</>
);

export default Loading;
