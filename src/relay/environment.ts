import { Store, RecordSource, Environment } from "relay-runtime";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";
import {
    RelayNetworkLayer,
    urlMiddleware,
    authMiddleware,
} from "react-relay-network-modern";

const network = new RelayNetworkLayer([
    urlMiddleware({
        url: "https://api.github.com/graphql",
    }),
    authMiddleware({
        token: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
    }),
]);
export default (records?: RecordMap) => {
    return new Environment({
        network,
        store: new Store(new RecordSource(records)),
    });
};
