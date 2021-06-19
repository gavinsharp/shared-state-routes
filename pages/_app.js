import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  if (Component.wrapper) {
    return (
      <Component.wrapper>
        <Component {...pageProps} />
      </Component.wrapper>
    );
  }
  return <Component {...pageProps} />;
}

export default MyApp;
