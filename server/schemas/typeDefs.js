const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
      _id: ID
      username: String
      email: String
      password: String
      favorites: [Int]
      userCreated: String
  }

  type Football {
      _id: ID
      code: String
      name: String
      score: Int
      oppScore: Int
      rushYards: Int
      passTDs: Int
      thirdDownPct: Float
      fumblesLost: Int
  }

  type Query {
      users: [User]
      footballs: [Football]
      football(id: ID!): Footbal
  }
`;

module.exports = typeDefs;
