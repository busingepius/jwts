require("express-async-errors");
const express = require("express");
const http = require("http");
const router = require("./routes/authRoutes");

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/jwts", router);
app.use((req, res, next) => {
    res.send("hello world!!!");
});

app.use((err, req, res, next) => {
    res.send("error occurred");
})

function start() {
    server.listen(port, () => console.log(`server is listening on ${port}`));
}

start()