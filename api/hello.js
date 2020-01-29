import getDbClient from './getDb';
module.exports = (req, res) => {
  const { name = 'World' } = req.query;
  // try {
  //   const client = getDbClient();
  //   console.log('client', client);
  // } catch (error) {
  //   console.log('client error', error);
  // }

  console.log('MY_SEC_VAR', process.env.MY_SEC_VAR);

  res.status(200).send(`Hello ${name}!`);
};
