// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { MongoClient } from "mongodb";

type Data = {
  data: any;
  message: string;
};

const userName = process.env.mongoDB_USER;
const mongodbConnect = process.env.mongoDB_PASSWORD;
const mongoDBConnectionString = `mongodb+srv://${userName}:${mongodbConnect}@cluster0.ys0vk3e.mongodb.net/?retryWrites=true&w=majority`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(mongoDBConnectionString);
    const db = client.db();

    const users = db.collection("users");

    const result = await users.insertOne(data);

    console.log(`RESULT: ${JSON.stringify(result)}`);

    client.close();

    res.status(201).json({
      message: "Connected to mongoDB",
      data: undefined,
    });
  }
}
