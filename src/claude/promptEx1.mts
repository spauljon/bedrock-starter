// Prompt - this is the only field you should change
import { invokeMessage } from './message.mjs';

const PROMPT = '[Replace this text]';

// Function to grade exercise correctness (equivalent to your `grade_exercise` function)
function gradeExercise(text: string) {
  const pattern = /^(?=.*1)(?=.*2)(?=.*3).*$/gm;

  return Boolean(pattern.test(text));
}

// Get Claude's response and print it, along with the corresponding grade
(async function() {
  const response = await invokeMessage(PROMPT);
  console.log(response);

  console.log('\n--------------------------- GRADING ---------------------------');
  console.log(`This exercise has been correctly solved: ${gradeExercise(response || '')}`);
})();

