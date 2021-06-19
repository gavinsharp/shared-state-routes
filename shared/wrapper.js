import { createContext, useContext, useEffect } from "react";

const Context = createContext("Missing context!");

export function useSharedContext() {
  return useContext(Context);
}

export default function SharedWrapper({ children }) {
  useEffect(() => {
    console.log("SharedWrapper mounted");

    return () => console.log("SharedWrapper unmounted");
  });

  return <Context.Provider value="Context!">{children}</Context.Provider>;
}
