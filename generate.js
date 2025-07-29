import { Configuration, OpenAIApi } from 'openai';

const config = new Configuration({
apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

export default async function handler(req, res) {
const { idea } = req.body;

const response = await openai.createCompletion({
model: 'text-davinci-003',
prompt: `Trouve un nom de marque original pour : ${idea}`,
max_tokens: 20,
});

res.status(200).json({ name: response.data.choices[0].text.trim() });
}

