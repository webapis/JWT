module.exports = (req, res) => {
  const { name = 'World' } = req.query;
  const url = process.env.VARIABLE_NAME;
  console.log('url---', url);
  res.status(200).send(`Hello ${name}!`);
};
