const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// 启用 CORS
app.use(cors());
app.use(express.json());

// 存储收藏的名言
let favorites = [];

// 获取所有收藏
app.get('/favorites', (req, res) => {
  res.json(favorites);
});

// 添加收藏
app.post('/favorites', (req, res) => {
  const quote = req.body;
  if (!quote._id || !quote.content || !quote.author) {
    return res.status(400).json({ error: 'Invalid quote data' });
  }
  
  // 检查是否已经收藏
  if (!favorites.some(f => f._id === quote._id)) {
    favorites.push(quote);
  }
  
  res.status(201).json(quote);
});

// 删除收藏
app.delete('/favorites/:id', (req, res) => {
  const id = req.params.id;
  favorites = favorites.filter(quote => quote._id !== id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 