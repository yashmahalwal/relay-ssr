import React from "react";
import { graphql, fetchQuery } from "react-relay";
import { useQuery, RelayEnvironmentProvider } from "relay-hooks";
import { pagesQuery } from "../__generated__/pagesQuery.graphql";
import environment from "../relay/environment";
import { NextPage, GetStaticProps } from "next";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";
const query = graphql`
    query pagesQuery {
        viewer {
            login
        }
    }
`;

const HomeBase: React.FunctionComponent = () => {
    const result = useQuery<pagesQuery>(query, {}, {});
    return <h1>{result.props?.viewer.login ?? "Loading"}</h1>;
};

interface HomeProps {
    records: RecordMap;
}

const Home: NextPage<HomeProps> = ({ records }) => {
    return (
        <RelayEnvironmentProvider environment={environment(records)}>
            <HomeBase />
        </RelayEnvironmentProvider>
    );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const env = environment();
    await fetchQuery(env, query, {});

    return {
        props: {
            records: env.getStore().getSource().toJSON(),
        },
    };
};

export default Home;
