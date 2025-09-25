import { BedrockClient, ListFoundationModelsCommand } from "@aws-sdk/client-bedrock";

async function listModels() {
  const client = new BedrockClient({ region: "us-east-1" });

  const command = new ListFoundationModelsCommand({});
  const response = await client.send(command);

  console.log("Available Foundation Models:\n");
  response.modelSummaries?.forEach(model => {
    console.log(`- ${model.modelId} (${model.modelName})`);
    console.log(`  Provider: ${model.providerName}`);
    console.log(`  Input Modalities: ${model.inputModalities?.join(", ")}`);
    console.log(`  Output Modalities: ${model.outputModalities?.join(", ")}\n`);
  });
}

listModels().catch(err => {
  console.error("Error listing models:", err);
});
