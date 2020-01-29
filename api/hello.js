import getDbClient from './getDb';
module.exports = (req, res) => {
  const { name = 'World' } = req.query;
  // try {
  //   const client = getDbClient();
  //   console.log('client', client);
  // } catch (error) {
  //   console.log('client error', error);
  // }

  console.log('__process.env.DB_NAME', process.env.DB_NAME);
  console.log('COLL_NAME', process.env.COLL_NAME);
  console.log('MYY_VARIABLE', process.env.MYY_VARIABLE);
  res.status(200).send(`Hello ${name}!`);
};
