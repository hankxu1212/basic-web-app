import { Configuration, OpenAIApi } from "openai"
require('dotenv').config()

const configuration = new Configuration({
  apiKey: "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"
});
const openai = new OpenAIApi(configuration);

export async function runCompletion (query: string) : Promise<any> {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: query,
    max_tokens:4000
  });

  return completion.data.choices[0].text;
}

export default function QueryProcessor(query: string) {
  const ret = runCompletion(query)
  ret.then((val) => { return val })
  return ""
}
