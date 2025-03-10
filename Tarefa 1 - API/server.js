const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const projetoRoutes = require('./routes/projetoRoutes');
const tarefaRoutes = require('./routes/tarefaRoutes');
const authRoutes = require('./routes/authRoutes');
const authMiddleware = require('./middleware/authMiddleware');

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/projetos', authMiddleware, projetoRoutes);
app.use('/tarefas', authMiddleware, tarefaRoutes);

app.listen(3000, () => {
  console.log('Servidor ON \nhttp://localhost:3000');
});