module.exports = (req, res) => {
  const { name = 'World' } = req.query;
  const url = process.env.DB_URL;
  console.log('URL++---', url);
  res.status(200).send(`Hello ${name}!`);
};
