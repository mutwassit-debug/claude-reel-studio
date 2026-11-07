const express = require("express");
const cors = require("cors");
const { GoogleGenAI } = require("@google/genai");

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
  });

  app.post("/api/generate", async (req, res) => {
    try {
        const { topic, style } = req.body;

            if (!topic) {
                  return res.status(400).json({ error: "Topic is required" });
                      }

                          const response = await ai.models.generateContent({
                                model: "gemini-2.5-flash",
                                      contents: `Create a Hindi 9:16 Instagram Reel plan.
                                            Topic: ${topic}
                                                  Style: ${style || "Cinematic"}
                                                        Include hook, script, scenes, voiceover and captions.`
                                                            });

                                                                res.json({ result: response.text });
                                                                  } catch (error) {
                                                                      console.error(error);
                                                                          res.status(500).json({ error: "Generation failed" });
                                                                            }
                                                                            });

                                                                            app.listen(3000, () => {
                                                                              console.log("AI Reel Studio backend running on port 3000");
                                                                              });