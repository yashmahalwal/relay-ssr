import "regenerator-runtime/runtime";
import { Store, RecordSource, Environment } from "relay-runtime";
import {
    RelayNetworkLayer,
    urlMiddleware,
    authMiddleware,
} from "react-relay-network-modern";

import RelayServerSSR from "react-relay-network-modern-ssr/lib/server";

export default function makeEnvironment(relayServerSSR: RelayServerSSR) {
    const network = new RelayNetworkLayer([
        relayServerSSR.getMiddleware(),
        urlMiddleware({
            url: "https://api.github.com/graphql",
        }),
        authMiddleware({
            token: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
        }),
    ]);

    return new Environment({
        network,
        store: new Store(new RecordSource()),
    });
}
