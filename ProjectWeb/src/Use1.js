import React from "react";
import { useParams } from "react-router";

export default function Use1() {
  let { id } = useParams();

  return (
    <>
      Use1
      <p>routing {id}</p>
    </>
  );
}
