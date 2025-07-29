import { Configuration, OpenAIApi } from 'openai';

const config = new Configuration({
apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

export default async function handler(req, res) {
const { name, idea } = req.body;

const response = await openai.createCompletion({
model: 'text-davinci-003',
prompt: `Explique comment booster la marque "${name}" avec l'idée : ${idea}`,
max_tokens: 100,
});

res.status(200).json({ boost: response.data.choices[0].text.trim() });
}

