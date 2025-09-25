import { BedrockClient, ListFoundationModelsCommand } from '@aws-sdk/client-bedrock';
import { getBedrockToken } from './token.mjs';
import { ListFoundationModelsCommandOutput } from '@aws-sdk/client-bedrock/dist-types/commands';

// @ts-ignore
async function listModels() {
  const client = new BedrockClient({ region: "us-east-1" });

  const command = new ListFoundationModelsCommand({});
  const response = await client.send(command);

  logModels(response);
}

function logModels(response: ListFoundationModelsCommandOutput) {
  console.log("Available Foundation Models:\n");
  response.modelSummaries?.forEach(model => {
    console.log(`- ${model.modelId} (${model.modelName})`);
    console.log(`  Provider: ${model.providerName}`);
    console.log(`  Input Modalities: ${model.inputModalities?.join(", ")}`);
    console.log(`  Output Modalities: ${model.outputModalities?.join(", ")}\n`);
  });
}

async function listModelsWithApiKey() {
  process.env.AWS_BEARER_TOKEN_BEDROCK = await getBedrockToken();

  const client = new BedrockClient({ region: "us-east-1" });
  const response = await client.send(new ListFoundationModelsCommand({}));

  logModels(response);
}

listModelsWithApiKey().catch(err => {
  console.error("Error listing models:", err);
});
