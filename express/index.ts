const express = require("express");
const app = express();
const PORT = 1111;
app.get("/", (_, res) => res.send({
    message: "Hello World"
}))
app.listen(PORT, () => console.log("Server Started"))