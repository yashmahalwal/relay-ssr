import React from "react";
import { graphql } from "react-relay";
import { useQuery } from "relay-hooks";
import { pagesQuery } from "../__generated__/pagesQuery.graphql";
import { NextPage } from "next";
const query = graphql`
    query pagesQuery {
        viewer {
            login
        }
    }
`;

const Home: NextPage = () => {
    const result = useQuery<pagesQuery>(query, {}, {});
    return <h1>{result.props?.viewer.login ?? "Loading"}</h1>;
};

export default Home;
