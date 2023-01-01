import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  fs.readFile("./data.txt", "utf-8", (err, data) => {
    const formattedData = data.split(" ");
    res.json(formattedData);
  });
});

app.listen(3002);
