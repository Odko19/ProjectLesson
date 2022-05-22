import { useContext, createContext, useState, useEffect } from "react";

const LogContext = createContext();

export function useLog() {
  return useContext(LogContext);
}

export default function LogProvider(props) {
  const [log, setLog] = useState();
  //   console.log(log);

  if (log && !localStorage.getItem("login")) {
    localStorage.setItem("login", JSON.stringify(log));
  } else {
    console.log(localStorage.getItem("login"));
  }

  return (
    <LogContext.Provider value={[log, setLog]}>
      {props.children}
    </LogContext.Provider>
  );
}
