import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
schema {
  query: Query
}
# this is how you add a comment
type Query {
  # comment for this field is possible
  hello: String
  """
  This is how
  a
  multi-line comment is made
  """
  name: String
}
`;

const resolvers = {
  Query: {
    hello: () => 'World',
    name: () => 'James',
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

// create server
const app = express();

// add CORS support
app.use(cors());

// this route will be handled by the following middleware
// graphiqlExpress needs to be passed the schema
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// second param is cb for when server starts
app.listen(4000, () => {
  console.log('Go to http://localhost:4000/graphiql')
})