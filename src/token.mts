import { getTokenProvider } from '@aws/bedrock-token-generator';

const tokenProvider = getTokenProvider();

export async function getBedrockToken() {
  return await tokenProvider();
}

