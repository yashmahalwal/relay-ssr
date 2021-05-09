/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type pagesQueryVariables = {};
export type pagesQueryResponse = {
    readonly viewer: {
        readonly login: string;
    };
};
export type pagesQuery = {
    readonly response: pagesQueryResponse;
    readonly variables: pagesQueryVariables;
};



/*
query pagesQuery {
  viewer {
    login
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "login",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pagesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pagesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7186b0f57658befc53064dbdf28e7ffc",
    "id": null,
    "metadata": {},
    "name": "pagesQuery",
    "operationKind": "query",
    "text": "query pagesQuery {\n  viewer {\n    login\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '9d0552aa8fdbf6d7af111d6c5dd774b5';
export default node;
