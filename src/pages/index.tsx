import React from "react";
import { graphql } from "react-relay";
import { useQuery } from "relay-hooks";
import { pagesQuery } from "../__generated__/pagesQuery.graphql";
const query = graphql`
    query pagesQuery {
        viewer {
            login
        }
    }
`;

function Home() {
    const result = useQuery<pagesQuery>(query, {});

    return <h1>{result.props?.viewer.login ?? "Loading"}</h1>;
}
export default Home;
