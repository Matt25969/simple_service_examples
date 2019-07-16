const express = require("express");
const bodyParser = require("body-parser");

const example = require("./routes/example");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/example", example);

const port = process.env.PORT || 5003;

app.listen(port, () => console.log(`server running on port ${port}`));
