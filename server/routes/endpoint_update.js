module.exports = async (req, res) => {
  const userId = req.query.userId;
  const { userName } = req.body;
  console.log(userId);
  console.log(userName);
  const updateDescription = "UPDATE Users SET userName = ? WHERE userId = ?";
  connection.query(updateDescription, [userName, userId], (err, rows) => {
    if (err) {
      res.json({ success: false, message: err.message });
    } else {
      res.json({
        success: true,
        message: "User name has been updated",
        res: userId,
      });
    }
  });
};
