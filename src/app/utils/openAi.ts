import OpenAI from "openai";

// Initialize OpenAI client with the API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Default behavior for environment variables
});

export default openai;
