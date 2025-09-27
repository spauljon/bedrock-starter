// Prompt - this is the only field you should change
import { DEFAULT_SYSTEM_PROMPT, invokeMessage } from './message.mjs';

const ANIMAL = 'Cat';
const PROMPT = `Please write two haikus about a ${ANIMAL}. Put each in tags.`;
const PREFILL = `Silent paws at dusk,
Moonlight drapes the sleeping earth,
Whiskers catch the stars.`;

(async function () {
  const response = await invokeMessage(PROMPT, DEFAULT_SYSTEM_PROMPT, PREFILL);
  console.log(response);
})();
