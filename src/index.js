import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
import { resolvers } from "./graphql/resolvers/post.js";
import { commentResolvers } from "./graphql/resolvers/comment.js";

const postTypeDefs = readFileSync(
  "./src/graphql/typeDefs/post.graphql",
  "utf-8",
);

const commentTypeDefs = readFileSync(
  "./src/graphql/typeDefs/comment.graphql",
  "utf-8",
);

// {
//       "id": 1,
//       "title": "His mother had always taught him",
//       "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
//       "tags": [
//         "history",
//         "american",
//         "crime"
//       ],
//       "reactions": {
//         "likes": 192,
//         "dislikes": 25
//       },
//       "views": 305,
//       "userId": 121
//     }

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
// const typeDefs = `#graphql
//   # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

//   # This "Book" type defines the queryable fields for every book in our data source.
//   type Book {
//     title: String
//     author: String
//   }

//   # The "Query" type is special: it lists all of the available queries that
//   # clients can execute, along with the return type for each. In this
//   # case, the "books" query returns an array of zero or more Books (defined above).
//   # Root operation type (mutation, subscription)
//   type Query {
//     books: [Book]
//   }
// `;

// const books = [
//   {
//     title: "The Awakening",
//     author: "Kate Chopin",
//   },
//   {
//     title: "City of Glass",
//     author: "Paul Auster",
//   },
// ];

// // Resolvers define how to fetch the types defined in your schema.
// // This resolver retrieves books from the "books" array above.
// const resolvers = {
//   Query: {
//     books: () => books,
//   },
// };

// request -> /graphql
// convert query -> abstract syntax tree (AST)
// server checks the tree against schema
// server runs the resolvers
// server sends data back in the shape of the query

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs: [postTypeDefs, commentTypeDefs],
  resolvers: [resolvers, commentResolvers],
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
