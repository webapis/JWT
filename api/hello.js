module.exports = (req, res) => {
  const { name = 'World' } = req.query;
  const url = process.env.MY_NAME;
  console.log('process.env.MY_NAME', process.env.MY_NAME);
  res.status(200).send(`Hello ${name}!`);
};
