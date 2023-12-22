import {gql} from "apollo-server";

const typeDefs = gql`
    """
    Cost object represents the fee from the agency to the region
    """
    type Cost {
        id: ID!
        area: String!
        cost: Int!
    }
    type Query {
        allCosts: [Cost!]!
        cost(id: ID!): Cost
    }
`;

export default typeDefs;
