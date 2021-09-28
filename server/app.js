import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import mongoose from 'mongoose';
import cors from 'cors';

import { schema } from './schema/schema.js';

const app = express();
const PORT = 3005;

mongoose.connect(
  'mongodb+srv://Dimas:3257005@cluster.cpym4.mongodb.net/music-shop?retryWrites=true&w=majority',
  { useNewURLParser: true }
)

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

const dbConnection = mongoose.connection;
dbConnection.on('error', err => console.log(`Connection error: ${err}`));
dbConnection.once('open', () => console.log('Connected to MongoDB'));

app.listen(PORT, err => {
  err ? console.log(err) : console.log('Server started')
})