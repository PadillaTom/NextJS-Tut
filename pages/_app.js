// // Imports SASS: ------------> GLOBALLY <----------------
// import '../styles/styles.scss';
// Sucede que IMPORTAR de esta manera hace la carga en CLIENT SIDE,
// usando JSX, hace la carga en SERVER SIDE

// Main:
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
