import React from "react";
import { Route, Routes } from "react-router";
import Use1 from "./Use1";
import Use2 from "./Use2";
import UseMain from "./UseMain";

export default function UseParam() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UseMain />}></Route>
        <Route path="/use1" element={<Use1 />}>
          <Route path=":id" element={<Use1 />} />
        </Route>
        <Route path="/use2" element={<Use2 />}></Route>
      </Routes>
    </div>
  );
}
