// Import
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// Database Connection
const connection = mysql.createConnection({
    host: "db.cshack.site",
    port: "3306",
    user: "group01",
    password: "214245249",
    database: "group01",
});
connection.connect(() => {
    console.log("Database is connected");
});
global.connection = connection;

// Create express app
const app = express();
const port = 6901;

var corsOptions = {
    origin: ["http://localhost:3000"],
    credentials: true,
};
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.json({ type: "application/json" }));

// Routes
app.get("/me", require("./routes/endpoint_me"));
app.post("/getUserId", require("./routes/endpoint_getUserId"));
app.post("/signup", require("./routes/endpoint_signup"));
app.post("/login", require("./routes/endpoint_login"));
app.delete("/delete", require("./routes/endpoint_delete"));
app.patch("/update", require("./routes/endpoint_update"));
app.post("/download", require("./routes/endpoint_cloudConnector"));
app.listen(port, () => {
    console.log("App is running at port " + port);
});
