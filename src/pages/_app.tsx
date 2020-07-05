import { AppProps } from "next/app";
import { RelayEnvironmentProvider } from "relay-hooks";
import environment from "../relay/environment";
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RelayEnvironmentProvider environment={environment()}>
            <Component {...pageProps} />
        </RelayEnvironmentProvider>
    );
}

export default MyApp;
