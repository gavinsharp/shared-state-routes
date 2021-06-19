import Link from "next/link";
import { useSharedContext } from "./wrapper";

export default function Links() {
  const sharedContext = useSharedContext();
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
      {sharedContext}
    </div>
  );
}
