import { createContext, useContext, useEffect, useMemo, useState } from "react";

const Context = createContext("Missing context!");

export function useSharedContext() {
  return useContext(Context);
}

export default function SharedWrapper({ children }) {
  const [sharedState, setSharedState] = useState("Shared normal React state");
  const sharedStateObject = useMemo(
    () => ({
      sharedState,
      setSharedState,
    }),
    [sharedState]
  );

  useEffect(() => {
    console.log("SharedWrapper mounted");

    return () => console.log("SharedWrapper unmounted");
  });

  return (
    <Context.Provider value={sharedStateObject}>{children}</Context.Provider>
  );
}
