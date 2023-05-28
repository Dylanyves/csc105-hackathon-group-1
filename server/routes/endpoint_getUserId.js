var jwt = require("jsonwebtoken");
module.exports = async (req, res) => {
    const { username } = req.body;
    console.log(username);
    const getIdQuery = "SELECT * FROM Users WHERE userName = ?";
    // // Delete the user
    connection.query(getIdQuery, [username], (err, rows) => {
        if (err) {
            res.json({ success: false, message: err.message });
        } else {
            res.json({
                success: true,
                message: "Success",
                data: rows[0],
            });
        }
    });
};
