const { User, Football } = require('../models');

const resolvers = {
    Query: {
        footballs: async () => {
            return await Football.find({})
        },

        users: async () => {
            return await User.find({})
        },
    },
    Mutation: {
        football: async (parent, {code}) => {
            return await Football.findOne({code})
        },
    }
};

module.exports = resolvers;