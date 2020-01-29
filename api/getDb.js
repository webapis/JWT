/* eslint-disable no-undef */
// eslint-disable-next-line prefer-destructuring
const MongoClient = require('mongodb').MongoClient;

// const url =
//   'mongodb+srv://demoadmin:demoadmin@democluster-k12ir.mongodb.net/test?retryWrites=true&w=majority';
const url = process.env.DATABASE_URL;
export default async function getDb() {
  try {
    return await MongoClient.connect(url);
  } catch (error) {
    throw Error(error);
  }
}
