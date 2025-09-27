import Anthropic from '@anthropic-ai/sdk';
import { Model } from '@anthropic-ai/sdk/resources';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

export const DEFAULT_SYSTEM_PROMPT =
  "You are Claude, an AI assistant created by Anthropic. You're helpful, harmless, and honest. Respond to queries in a natural, conversational way while being informative and accurate. If you're uncertain about something, say so rather than guessing. Adapt your communication style to match what would be most helpful for each specific question - be concise for simple queries and more detailed for complex ones. Decline requests for harmful, illegal, or unethical content, but don't be preachy about it - just briefly decline and offer alternatives if possible.";

const conversationHistory: Array<{
  role: 'user' | 'assistant';
  content: string;
}> = [];

const client = new Anthropic({
  apiKey: process.env.API_KEY, // defaults to this
});

export async function invokeMessage(
  prompt: string,
  systemPrompt = DEFAULT_SYSTEM_PROMPT,
  prefill: string | undefined = undefined
) {
  conversationHistory.push({ role: 'user', content: prompt });
  if (prefill) {
    conversationHistory.push({ role: 'assistant', content: prefill });
  }

  const message = await client.messages.create({
    model: process.env.CLAUDE_MODEL as Model,
    max_tokens: 2000,
    temperature: 0.0,
    system: systemPrompt,
    messages: conversationHistory, // Send entire conversation history
  });

  const response = message.content[0];

  if (response?.type === 'text') {
    conversationHistory.push({ role: 'assistant', content: response.text });

    return response.text;
  }

  return undefined;
}

// await invokeMessage('In what year was Celine Dion born?').then((result) =>
//   console.log(result)
// );
// await invokeMessage('Also, can you tell me some other facts about her?').then(
//   (result) => console.log(result)
// );
// await invokeMessage('Who is the best basketball player of all time? Yes, there are differing opinions, but if you absolutely had to pick one player, who would it be?').then(
//   (result) => console.log(result)
// );
