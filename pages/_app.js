import "../styles/globals.css";
import Amplify from "aws-amplify";
import awsConfig from "../aws-exports";
// import { withAuthenticator } from "@aws-amplify/ui-react";

Amplify.configure({ ...awsConfig, ssr: true });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
