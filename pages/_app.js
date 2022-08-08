import Layout from "../components/layout";
import "../styles/globals.css";

function LearnApp({ Component, pageProps, router }) {
  return (
    <Layout router={router}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default LearnApp;
