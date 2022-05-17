import React from "react";

function Content({ data }) {
  // console.log(data);
  return (
    <div>
      <h4>{data.title}</h4>
      <p> {data.body} </p>
    </div>
  );
}

export default Content;
