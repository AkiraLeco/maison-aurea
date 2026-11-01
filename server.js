const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3100;

app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, () => console.log(`Maison Áurea em http://localhost:${PORT}`));
