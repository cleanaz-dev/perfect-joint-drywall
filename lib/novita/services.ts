import { readFile } from "node:fs/promises";
import path from "node:path";
import { novita, LLM_MODEL, type LLMModel } from "./config";

const BASE_SYSTEM_PROMPT =
  "You are a helpful assistant for a contractor company named Perfect Joint Drywall. Keep answers short and concise, and provide clear instructions when necessary.";

const BUSINESS_LOGIC_PATH = path.join(process.cwd(), "lib", "business-logic.md");

async function buildSystemPrompt(basePrompt: string): Promise<string> {
  try {
    const businessLogic = await readFile(BUSINESS_LOGIC_PATH, "utf-8");
    return `${basePrompt}\n\nUse the following business information to answer questions. If the answer isn't covered here, say you're not sure and suggest calling the office.\n\n<business_info>\n${businessLogic}\n</business_info>`;
  } catch (err) {
    console.error("Could not read business-logic.md:", err);
    return basePrompt;
  }
}

export async function chat(
  chatMessages: { role: "user" | "assistant"; content: string }[],
  model: LLMModel = LLM_MODEL.DEEPSEEK_V_4_1_FLASH,
  systemPrompt: string = BASE_SYSTEM_PROMPT
): Promise<string> {
  const response = await novita.chat.completions.create({
    model,
    messages: [
      { role: "system", content: await buildSystemPrompt(systemPrompt) },
      ...chatMessages,
    ],
  });

  return response.choices[0]?.message?.content ?? "";
}