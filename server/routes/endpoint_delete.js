var jwt = require("jsonwebtoken");
module.exports = async (req, res) => {
  const { userId } = req.body;
  console.log(userId);
  const deleteOption = "DELETE FROM Users WHERE userId = ?";

  // Delete the user
  connection.query(deleteOption, [userId], (optionErr, optionRows) => {
    if (optionErr) {
      res.json({ success: false, message: optionErr.message });
    } else {
      res.json({
        success: true,
        message: "User has been deleted",
      });
    }
  });
};
