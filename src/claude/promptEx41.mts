// Prompt - this is the only field you should change
import { invokeMessage } from './message.mjs';

const TOPIC = 'Pigs';

const PROMPT = `Create a Haiku using the topic of ${TOPIC}`

function gradeExercise(text: string) {
  return text.toLowerCase().includes('haiku');
}

// Get Claude's response and print it, along with the corresponding grade
(async function() {
  const response = await invokeMessage(PROMPT);
  console.log(response);

  console.log('\n--------------------------- GRADING ---------------------------');
  console.log(`This exercise has been correctly solved: ${gradeExercise(response || '')}`);
})();

