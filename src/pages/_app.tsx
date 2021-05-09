import { AppProps } from "next/app";
import { Suspense } from "react";
import { RelayEnvironmentProvider } from "relay-hooks";
import environment from "../relay/environment";
function MyApp({ Component, pageProps }: AppProps) {
    return (
            <Component {...pageProps} />
    );
}

export default MyApp;
