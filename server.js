const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Node.js Kubernetes App</title></head>
      <body style="font-family: Arial; text-align: center; margin-top: 50px;">
        <h1>Salom! Node.js ilovasi Kubernetes klasterida ishlayapti 🚀</h1>
        <p>Bu sayt GitHub Actions orqali avtomatik deploy qilindi.</p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
