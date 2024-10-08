const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models")


// cors middleware
const corsOption = {
    origin: ["http://localhost:5173"],
};
app.use(cors(corsOption));
app.use(express.json());

const blogRouter = require("./routes/blog");
app.use("/blog", blogRouter);
const userRouter = require("./routes/users");
app.use("/auth", userRouter);


db.sequelize.sync().then(() => {
    app.use(cors(corsOption));
    app.get("/api", (req, res) => {
        res.json({ "users": ["If appear backend is working"] })
    });
    app.listen(3001, () => {
        console.log("Server started on port 3001")
    });

});

