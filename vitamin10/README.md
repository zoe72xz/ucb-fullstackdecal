# Quote of the Day App

一个简单的"每日引言"Web应用，使用React前端和Flask后端构建。

## 项目结构

```
vitamin10/
├── frontend/          # React前端
│   ├── src/
│   │   ├── App.js
│   │   └── App.css
│   └── package.json
└── backend/           # Flask后端
    ├── app.py
    └── requirements.txt
```

## 如何运行

### 后端设置

1. 进入backend目录：
   ```bash
   cd backend
   ```

2. 创建虚拟环境（可选）：
   ```bash
   python -m venv venv
   source venv/bin/activate  # 在Windows上使用: venv\Scripts\activate
   ```

3. 安装依赖：
   ```bash
   pip install -r requirements.txt
   ```

4. 运行Flask服务器：
   ```bash
   python app.py
   ```

### 前端设置

1. 进入frontend目录：
   ```bash
   cd frontend
   ```

2. 安装依赖：
   ```bash
   npm install
   ```

3. 运行开发服务器：
   ```bash
   npm start
   ```

现在你可以在浏览器中访问 http://localhost:3000 来查看应用。 