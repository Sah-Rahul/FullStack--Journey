const getUsers = (req, res) => {
  res.status(200).json([
    { id: 1, name: "Rahul" },
    { id: 2, name: "Sagar" },
  ]);
};

module.exports = { getUsers };
