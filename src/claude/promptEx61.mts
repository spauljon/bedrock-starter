// Prompt template with a placeholder for the variable content
import { invokeMessage } from './message.mjs';

const SYSTEM_PROMPT = `You are classifying emails:
<categories>
(A) Pre-sale question
(B) Broken or defective item
(C) Billing question
(D) Other (please explain) 
</categories>
Please respond with only the classification.
<sampleanswer>(A) Pre-sale question</sampleanswer> `;

const PROMPT = `Please classify this email: {email}`;

let PREFILL = "";

// Variable content stored as an array of strings
const EMAILS = [
  "Hi -- My Mixmaster4000 is producing a strange noise when I operate it. It also smells a bit smoky and plasticky, like burning electronics.  I need a replacement.",
  "Can I use my Mixmaster 4000 to mix paint, or is it only meant for mixing food?",
  "I HAVE BEEN WAITING 4 MONTHS FOR MY MONTHLY CHARGES TO END AFTER CANCELLING!!  WTF IS GOING ON??",
  "How did I get here I am not good with computer.  Halp.",
];

const ANSWERS = [
  ["B"],
  ["A", "D"],
  ["C"],
  ["D"],
];

function isCorrect(answer: string, response: string | undefined): boolean {
  return Boolean(response?.match(`(${answer})`));
}

for (let i = 0; i < EMAILS.length; i++) {
  const formattedPrompt = PROMPT.replace("{email}", EMAILS[i]);

  // Get Claude's response
  const response = await invokeMessage(formattedPrompt, SYSTEM_PROMPT, PREFILL);

  // Grade Claude's response
  const grade = ANSWERS[i].some((ans) => isCorrect(ans, response));

  // Print Claude's response
  console.log("--------------------------- Full prompt with variable substutions ---------------------------");
  console.log("USER TURN");
  console.log(formattedPrompt);
  console.log("\nASSISTANT TURN");
  console.log(PREFILL);
  console.log("\n------------------------------------- Claude's response -------------------------------------");
  console.log(response);
  console.log("\n------------------------------------------ GRADING ------------------------------------------");
  console.log(`This exercise has been correctly solved: ${grade}\n\n\n\n\n\n`);
}
