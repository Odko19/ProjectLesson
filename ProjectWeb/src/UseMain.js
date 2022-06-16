import React from "react";
import { Link } from "react-router-dom";

export default function UseMain() {
  return (
    <>
      UseMain
      <div>
        <Link to="/use1">Use1</Link>
      </div>
      <div>
        <Link to="/use2">Use2</Link>
      </div>
    </>
  );
}
