import React, { useEffect, useState } from "react";
import App from "./components/App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Contents from "./components/Contents";
import Content from "./components/Content";
import { Routes, Route } from "react-router";

function Lesson() {
  const [lessons, setLessons] = useState({});

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((res) => setLessons(res));
  }, []);

  return (
    <div>
      <Header data={lessons} />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        {lessons &&
          Object.keys(lessons).map((title, i) => {
            return (
              <Route
                path={`/${title}`}
                element={<Contents data={lessons[`${title}`]} />}
              >
                {Object.keys(lessons[`${title}`]).map((innerTitle, i) => {
                  return (
                    <Route
                      key={i}
                      path={`${innerTitle}`}
                      element={
                        <Content data={lessons[`${title}`][`${innerTitle}`]} />
                      }
                    />
                  );
                })}
              </Route>
            );
          })}
      </Routes>
      <Footer />
    </div>
  );
}

export default Lesson;
