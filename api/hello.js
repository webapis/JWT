module.exports = (req, res) => {
  const { name = 'World' } = req.query;
  const url = process.env;
  console.log('__process.env.DATABASE_NAME', process.env);
  res.status(200).send(`Hello ${name}!`);
};
