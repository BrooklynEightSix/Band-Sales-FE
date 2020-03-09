// import { ApolloServer } from 'apollo-server';
// import { makeExecutableSchema } from 'graphql-tools';
// import { typeDefs } from './typeDefs';
// import { resolvers } from './resolvers';
const express = require('express')
const mongoose = require("mongoose")

const app = express()


require('dotenv').config();
// import { verifyToken } from './utils';
const startServer = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0-0oidh.mongodb.net/band-sales-db?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );
    app.use(express.json({extended:false}))
    app.use('/api/band', require('./api/band'))
    app.use('/api/venue', require('./api/venue'))
    app.use('/api/album', require('./api/album'))
    app.use('/api/merch', require('./api/merch'))
    app.use('/api/sale', require('./api/sale'))
    app.listen(4000, () =>
      console.log(`Example app listening on port 4000!`),
    );

  } catch (err) {
    console.error(err);
  }
};

startServer();

