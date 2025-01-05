const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const answerRoutes = require("./routes/answerRoute");

app.use(cors());
app.use(express.json());
app.use("/", answerRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//git push -u origin master