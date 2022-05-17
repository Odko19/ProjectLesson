import React from "react";

function Content({ data }) {
  console.log(data);
  return (
    <div>
      <p>{data.title}</p>
      <p> {data.body} </p>
      <img src={data.image} alt="" />
    </div>
  );
}

export default Content;
