const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const loggerMiddleware = require('./middlewares/logger.js');
const errorHandler = require('./middlewares/errorHandler.js');
const categoriasRouter = require('./routes/categorias.js');
const produtosRouter = require('./routes/produtos.js');

app.use(loggerMiddleware);

app.use('/api/categorias', categoriasRouter);
app.use('/api/produtos', produtosRouter);

app.get('/', (req, res) => {
    res.json({ mensagem: '🍕 Bem-vindo à API do IL Forno' });
});

app.use((req, res, next) => {
    res.status(404).json({
        sucesso: false,
        mensagem: `Rota '${req.url}' não encontrada na API do IL Forno.`
    });
});

app.use(errorHandler);

const PORTA = process.env.PORT || 3000;
app.listen(PORTA, () => {
    console.log(`🚀 Servidor rodando na porta ${PORTA}`);
});

module.exports = app;
