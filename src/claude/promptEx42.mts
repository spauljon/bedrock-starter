// Prompt - this is the only field you should change
import { invokeMessage } from './message.mjs';

const QUESTION = 'ar cn brown?';

const PROMPT = `Hia its me i have a q about dogs: ${QUESTION} tx it help me muhch much atx fst fst answer short short tx`

function gradeExercise(text: string) {
  return text.toLowerCase().includes('brown');
}

// Get Claude's response and print it, along with the corresponding grade
(async function() {
  const response = await invokeMessage(PROMPT);
  console.log(response);

  console.log('\n--------------------------- GRADING ---------------------------');
  console.log(`This exercise has been correctly solved: ${gradeExercise(response || '')}`);
})();

