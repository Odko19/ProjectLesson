import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function useUser() {
  return useContext(UserContext);
}

export const UserProvider = (props) => {
  const [user, setUser] = useState();

  //   useEffect(() => {
  //     if (localStorage.getItem("userInfo")) {
  //       const data = JSON.parse(localStorage.getItem("user"));
  //       setUser({
  //         userName: data.name,
  //         email: data.email,
  //         address: data.address,
  //         id: data._id,
  //       });
  //     }
  //   }, []);
  //   useEffect(() => {
  //     if (user) {
  //       localStorage.setItem("user", JSON.stringify(user));
  //     } else {
  //       localStorage.removeItem("user");
  //     }
  //   }, [user]);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
