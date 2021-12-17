const { User, Football } = require('../models');

const resolvers = {
    Query: {
        footballs: async () => {
            return await Football.find({})
        },
        users: async () => {
            return await User.find({})
        },
    }
};

module.exports = resolvers;