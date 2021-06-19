import Links from "../shared/links";
import SharedWrapper from "../shared/wrapper";

export default function Home() {
  return (
    <>
      <Links />
      Home page!
    </>
  );
}

Home.wrapper = SharedWrapper;
