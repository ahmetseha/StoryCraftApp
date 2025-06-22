import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(false);

  const generateStory = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    try {
      const response = await fetch("http://localhost:3001/api/generate-story", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: prompt.trim() }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate story");
      }

      const data = await response.json();
      setStory(data.story);
    } catch (error) {
      console.error("Error:", error);
      setStory("Hikaye oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hikaye Oluşturucu</h1>

      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="Bir hikaye fikri girin... (örn: uzayda kaybolan bir astronot)"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !loading) generateStory();
          }}
          disabled={loading}
        />
      </div>

      <button
        className={styles.button}
        onClick={generateStory}
        disabled={loading || !prompt.trim()}
      >
        {loading ? (
          <div className={styles.loading}>
            <div className={styles.spinner}></div>
            Oluşturuluyor...
          </div>
        ) : (
          "Hikaye Oluştur"
        )}
      </button>

      {story && <div className={styles.story}>{story}</div>}
    </div>
  );
}

export default App;
