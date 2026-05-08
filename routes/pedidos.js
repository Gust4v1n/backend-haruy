const express = require('express');
const router = express.Router();
const db = require('../data/supabase'); // Seu arquivo que já exporta o createClient

// POST /api/pedidos - Rota que o frontend vai chamar
router.post('/', async (req, res) => {
    const { cliente, itens, total, tipo_entrega } = req.body;

    try {
        const { data, error } = await db
            .from('pedidos')
            .insert([{ 
                cliente, 
                itens, 
                total, 
                tipo_entrega,
                status: 'novo' // Define o status inicial
            }])
            .select();

        if (error) throw error;

        res.status(201).json({ sucesso: true, pedido: data[0] });
    } catch (error) {
        console.error("Erro no servidor:", error.message);
        res.status(500).json({ sucesso: false, erro: error.message });
    }
});

router.get('/', async (req, res) => {
    const { data, error } = await db
        .from('pedidos')
        .select('*')
        .neq('status', 'finalizado')
        .order('created_at', { ascending: false });

    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

// PATCH /api/pedidos/:id - Atualiza apenas o status (Aceitar, Pronto, etc)
router.patch('/:id', async (req, res) => {
    const { status } = req.body;
    const { data, error } = await db
        .from('pedidos')
        .update({ status })
        .eq('id', req.params.id)
        .select();

    if (error) return res.status(500).json({ error: error.message });
    res.json(data[0]);
});

// DELETE /api/pedidos/:id - Remove ou Recusa o pedido
router.delete('/:id', async (req, res) => {
    const { error } = await db.from('pedidos').delete().eq('id', req.params.id);
    if (error) return res.status(500).json({ error: error.message });
    res.json({ sucesso: true });
});

module.exports = router;