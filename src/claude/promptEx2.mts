// Prompt - this is the only field you should change
import { invokeMessage } from './message.mjs';

const SYSTEM_PROMPT = '[Replace this text]';

const PROMPT = 'How big is the sky?'

function gradeExercise(text: string) {
  const pattern = /^(?=.*sky)(?=.*earth)(?=.*size).*$/gmi;

  return Boolean(pattern.test(text));
}

// Get Claude's response and print it, along with the corresponding grade
(async function() {
  const response = await invokeMessage(PROMPT, SYSTEM_PROMPT);
  console.log(response);

  console.log('\n--------------------------- GRADING ---------------------------');
  console.log(`This exercise has been correctly solved: ${gradeExercise(response || '')}`);
})();

