import OpenAI from "openai";

export const LLM_MODEL = {
  MIMO_V_2_6_FLASH: "xiaomimimo/mimo-v2.6-flash",
  GLM_5_3_FLASH: "zai-org/glm-5.3-flash",
  DEEPSEEK_V_4_1_FLASH: "deepseek/deepseek-v4.1-flash",
} as const;

export type LLMModel = (typeof LLM_MODEL)[keyof typeof LLM_MODEL];

export const novita = new OpenAI({
  baseURL: "https://api.novita.ai/openai",
  apiKey: process.env.NOVITA_API_KEY,
});

