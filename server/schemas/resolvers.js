const { User, Football, GoodStats, BadStats } = require('../models');

const resolvers = {
    Query: {
        footballs: async () => {
            return await Football.find({})
        },

        football: async (parent, args) => {
            return await Football.find({"code": args.code})
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