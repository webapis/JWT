import getDbClient from './getDb';
module.exports = (req, res) => {
  const { name = 'World' } = req.query;
  // try {
  //   const client = getDbClient();
  //   console.log('client', client);
  // } catch (error) {
  //   console.log('client error', error);
  // }

  console.log('DATABASE_URL', process.env.DATABASE_URL);

  res.status(200).send(`Hello ${name}!`);
};
