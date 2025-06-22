import express from "express";
import cors from "cors";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// OpenAI configuration
const openai = new OpenAI({
  apiKey:
    "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",
});

// Story generation endpoint
app.post("/api/generate-story", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Sen bir hikaye yazarısın. Verilen prompt'a göre yaratıcı, ilgi çekici ve akıcı hikayeler yaz. Hikayeler Türkçe olmalı ve 200-400 kelime arasında olmalı.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 800,
      temperature: 0.8,
    });

    const story = completion.choices[0].message.content;
    res.json({ story });
  } catch (error) {
    console.error("Error generating story:", error);
    res.status(500).json({ error: "Failed to generate story" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
