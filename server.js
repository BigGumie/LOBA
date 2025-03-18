const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const projetoRoutes = require('./routes/projetoRoutes');
const tarefaRoutes = require('./routes/tarefaRoutes');
const authRoutes = require('./routes/authRoutes');
const authMiddleware = require('./middleware/authMiddleware');
<<<<<<< HEAD
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

=======

app.use(bodyParser.json());

>>>>>>> fc39bcadf68ce86645354c2a43de2d6369912155
app.use('/auth', authRoutes);
app.use('/projetos', authMiddleware, projetoRoutes);
app.use('/tarefas', authMiddleware, tarefaRoutes);

<<<<<<< HEAD
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ON \nhttp://localhost:${PORT}`);
  console.log(`Swagger UI disponível em \nhttp://localhost:${PORT}/api-docs`);
});

module.exports = app; // Exportar o app para os testes
=======
app.listen(3000, () => {
  console.log('Servidor ON \nhttp://localhost:3000');
});
>>>>>>> fc39bcadf68ce86645354c2a43de2d6369912155
