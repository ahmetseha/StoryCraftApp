import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hikaye API çalışıyor!" });
});

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

app.post("/api/generate-story", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    console.log("Generating story for prompt:", prompt);

    const geminiPrompt = `Sen bir hikaye yazarısın. Verilen prompt'a göre yaratıcı, ilgi çekici ve akıcı hikayeler yaz. Hikayeler Türkçe olmalı ve 200-400 kelime arasında olmalı.\n\nPrompt: ${prompt}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: geminiPrompt,
      config: {
        thinkingConfig: {
          thinkingBudget: 0,
        },
      },
    });

    console.log("Response received:", response);
    const story = response.text || "Hikaye oluşturulamadı.";
    res.json({ story });
  } catch (error) {
    console.error("Error generating story:", error);
    res
      .status(500)
      .json({ error: "Failed to generate story: " + error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log("Using API key:", GEMINI_API_KEY.substring(0, 10) + "...");
});
