const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

let favorites = []; // in-memory for now

// Get all favorites
app.get("/favorites", (req, res) => {
  try {
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch favorites" });
  }
});

// Save a new favorite
app.post("/favorites", (req, res) => {
  try {
    const quote = req.body;
    
    // 验证数据
    if (!quote._id || !quote.content || !quote.author) {
      return res.status(400).json({ error: "Invalid quote data" });
    }

    // 检查是否已经存在
    const exists = favorites.some(f => f._id === quote._id);
    if (exists) {
      return res.status(400).json({ error: "Quote already exists in favorites" });
    }

    favorites.push(quote);
    res.status(201).json({ message: "Quote saved successfully", quote });
  } catch (error) {
    res.status(500).json({ error: "Failed to save quote" });
  }
});

// Delete a quote
app.delete("/favorites/:id", (req, res) => {
  try {
    const id = req.params.id;
    const initialLength = favorites.length;
    
    favorites = favorites.filter(q => q._id !== id);
    
    if (favorites.length === initialLength) {
      return res.status(404).json({ error: "Quote not found" });
    }
    
    res.json({ message: "Quote deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete quote" });
  }
});

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
