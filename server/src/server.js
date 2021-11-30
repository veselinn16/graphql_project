import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import cors from 'cors';
import bodyParser from 'body-parser';
import typeDefs from './typeDefs';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

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