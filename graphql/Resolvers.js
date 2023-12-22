import costs from '../models/Cost.js'; 

const resolvers = {
    Query: {
        allCosts() {
            return costs;
        },
        cost(root, { id }) {
            return costs.find((cost) => cost.id === id);
        },
    },
};

export default resolvers;
