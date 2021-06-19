import SharedWrapper from "../shared/wrapper";
import Links from "../shared/links";

export default function Shared() {
  return (
    <>
      <Links />
      Shared!
    </>
  );
}

Shared.wrapper = SharedWrapper;
