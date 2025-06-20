import React from "react";
import { useLocation } from "react-router";

const Detail = () => {
  const loc = useLocation();

  const { data } = loc?.state;
  console.log(data);
  console.log(loc.pathname);
  return <div>helo {data?.email}</div>;
};

export default Detail;
