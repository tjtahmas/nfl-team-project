const { User, Football } = require('../models');

const resolvers = {
    Query: {
        footballs: async () => {
            return await Football.find({})
        },
        football: async (parent, args) => {
            return await Football.findOne(args.code)
        },
        users: async () => {
            return await User.find({})
        },
    }
};

module.exports = resolvers;