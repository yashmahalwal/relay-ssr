// relay.config.js
module.exports = {
    // ...
    // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
    src: "./src",
    exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
    schema: "./schema.graphql",
    extensions: ["ts", "tsx"],
    language: "typescript",
    artifactDirectory: "./src/__generated__",
};
