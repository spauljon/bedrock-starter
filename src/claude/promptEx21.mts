// Prompt - this is the only field you should change
import { invokeMessage } from './message.mjs';

const SYSTEM_PROMPT = 'Please respond in Spanish';

const PROMPT = 'Hello Claude, how are you?'

function gradeExercise(text: string) {
  return text.toLowerCase().includes('hola');
}

// Get Claude's response and print it, along with the corresponding grade
(async function() {
  const response = await invokeMessage(PROMPT, SYSTEM_PROMPT);
  console.log(response);

  console.log('\n--------------------------- GRADING ---------------------------');
  console.log(`This exercise has been correctly solved: ${gradeExercise(response || '')}`);
})();

