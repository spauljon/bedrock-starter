import Anthropic from '@anthropic-ai/sdk';
import { Model } from '@anthropic-ai/sdk/resources';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const client = new Anthropic({
  apiKey: process.env.API_KEY, // defaults to this
});

export async function invoke(prompt: string, systemPrompt = '') {
  const message = await client.messages.create({
    model: process.env.CLAUDE_MODEL as Model,
    max_tokens: 2000,
    temperature: 0.0,
    system: systemPrompt,
    messages: [
      {
        role: 'user',
        content: prompt,
      },
    ],
  });

  return message.content[0];
}

invoke('hello world').then((result) => console.log(result));
