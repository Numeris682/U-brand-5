import { Configuration, OpenAIApi } from 'openai';

const config = new Configuration({
apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

export default async function handler(req, res) {
const { name } = req.body;

const response = await openai.createImage({
prompt: `Logo simple, professionnel, minimaliste pour une marque appelée ${name}`,
n: 1,
size: '512x512',
});

res.status(200).json({ logo: response.data.data[0].url });
}

