import { createContext, useContext, useState } from "react";

export const UserNumberContext = createContext({ userNumber:"", setUserNumber:"" });

export const UserNumberContextProvider = ({ children }) => {
  const [userNumber, setUserNumber] = useState("");

  const value = {
    userNumber,
    setUserNumber,
  };

  return (
    <UserNumberContext.Provider value={value}>
      {children}
    </UserNumberContext.Provider>
  );
};

export const useUserNumberContext = () => {
  return useContext(UserNumberContext);
};
