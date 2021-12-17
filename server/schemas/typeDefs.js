const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
      id: Int
      username: String
      email: String
      password: String
      favorites: [Int]
      userCreated: String
  }

  type Football {
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
  }
`;

module.exports = typeDefs;
