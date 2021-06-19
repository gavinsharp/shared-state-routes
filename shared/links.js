import Link from "next/link";
import { useCallback } from "react";
import { useSharedContext } from "./wrapper";

export default function Links() {
  const { sharedState, setSharedState } = useSharedContext();
  const clickHandler = useCallback(() => {
    setSharedState(Math.random());
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", margin: 20 }}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/shared">
        <a>Shared</a>
      </Link>
      <Link href="/notshared">
        <a>Not shared</a>
      </Link>
      {sharedState}
      <button onClick={clickHandler}>Update shared state</button>
    </div>
  );
}
