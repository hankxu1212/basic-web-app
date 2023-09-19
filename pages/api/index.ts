// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Configuration, OpenAIApi } from "openai"
require('dotenv').config()

const configuration = new Configuration({
  apiKey: "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"
});
const openai = new OpenAIApi(configuration);

import type { NextApiRequest, NextApiResponse } from "next";

type Data = string;

import QueryProcessor from "../../utils/QueryProcessor";
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.url);
  
  const query = req.query.q as string;

  const completion = openai.createCompletion({
    model: "text-davinci-003",
    prompt: query,
    max_tokens:4000
  });

  const response = completion.data.choices[0].text;

  res.status(200).send(response);
}
