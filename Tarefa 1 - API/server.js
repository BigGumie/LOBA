const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const projetoRoutes = require('./routes/projetoRoutes');
const tarefaRoutes = require('./routes/tarefaRoutes');
const authRoutes = require('./routes/authRoutes');
const authMiddleware = require('./middleware/authMiddleware');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerDocument = require('./swagger.json');

app.use(bodyParser.json());

const swaggerOptions = {
  swaggerDefinition: swaggerDocument,
  apis: ['./routes/*.js'],
};

const swaggerSpecs = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.use('/auth', authRoutes);
app.use('/projetos', authMiddleware, projetoRoutes);
app.use('/tarefas', authMiddleware, tarefaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ON \nhttp://localhost:${PORT}`);
  console.log(`Swagger UI disponível em \nhttp://localhost:${PORT}/api-docs`);
});

module.exports = app; // Exportar o app para os testes