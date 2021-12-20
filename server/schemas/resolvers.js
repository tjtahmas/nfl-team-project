const { User, Football, GoodStats, BadStats } = require('../models');

const resolvers = {
    Query: {
        footballs: async () => {
            return await Football.find({})
        },

        users: async () => {
            return await User.find({})
        },

        // goodStats: async () => {
        //     return await GoodStats.find({})
        // },

        // badStats: async () => {
        //     return await BadStats.find({})
        // }
    },
    Mutation: {
        football: async (parent, {code}) => {
            return await Football.findOne({code})
        },
    }
};

module.exports = resolvers;