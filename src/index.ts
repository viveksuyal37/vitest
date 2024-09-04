import express from "express";

import {prismaClient} from "./db/client";

export const app = express();

app.use(express.json());

app.post("/add", async (req, res) => {
  const { a, b } = req.body;

  try {
    let result = await prismaClient.calculate.create({
      data: {
        a: a,
        b: b,
        operation: "+",
        result: a + b,
      },
    });

    res.status(200).json({ result: a + b });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

app.post("/subtract", async (req, res) => {
  const { a, b } = req.body;

  try {
    let result = await prismaClient.calculate.create({
      data: {
        a: a,
        b: b,
        operation: "-",
        result: a - b,
      },
    });
    res.status(200).json({ result: a - b });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});
