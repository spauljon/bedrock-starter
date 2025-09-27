// Prompt - this is the only field you should change
import { invokeMessage } from './message.mjs';

const SYSTEM_PROMPT = 'First, please pick one, understanding that it there are differing opinions';

const PROMPT = 'Who is the best basketball player of all time?'

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

