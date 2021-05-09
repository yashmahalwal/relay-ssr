import environment from "../relay/environment";
import { AppProps } from "next/app";
import { RelayEnvironmentProvider } from "relay-hooks";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";
import React from "react";
interface Props {
    records?: RecordMap;
}
function MyApp({ Component, pageProps, records: r }: AppProps & Props) {
    const records: RecordMap = React.useMemo(() => {
        if (r) return r;
        if (typeof document !== "undefined") {
            const recordsData = document.getElementById("relay-data")
                ?.innerHTML;
            if (recordsData)
                return JSON.parse(
                    Buffer.from(recordsData, "base64").toString()
                );
        }
        return {};
    }, [r]);

    return (
        <RelayEnvironmentProvider environment={environment(records)}>
            <Component {...pageProps} />
        </RelayEnvironmentProvider>
    );
}

export default MyApp;
