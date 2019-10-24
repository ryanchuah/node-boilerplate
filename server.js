require("dotenv").config()

const express = require("express");
const app = express();

app.use(express.json());
var mongoUtil = require('./mongoUtil')

mongoUtil.connectToServer(function (err, client) {
    if (err) console.log(err);
  
    app.use('/api/example', require('./routes/api/example'))

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  });
