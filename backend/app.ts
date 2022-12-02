import express from 'express'
const cors = require("cors");

export const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).json({ message: "hello world!" });
});

