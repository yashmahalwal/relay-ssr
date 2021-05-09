import { Network, Store, RecordSource, Environment } from "relay-runtime";

function fetchQuery(operation, variables) {
    return fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    }).then((response) => {
        return response.json();
    });
}

export default function makeEnvrionment() {
    return new Environment({
        network: Network.create(fetchQuery),
        store: new Store(new RecordSource()),
    });
}
