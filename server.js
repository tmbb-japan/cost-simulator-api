import {ApolloServer} from "apollo-server";
import typeDefs from './graphql/Schema.js'; 
import resolvers from './graphql/Resolvers.js';

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({url}) => {
    console.log(`Running on ${url}`);
})