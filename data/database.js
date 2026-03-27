// ⚠️ Este arquivo é apenas referência / dados de exemplo.
// O projeto usa o Supabase como banco de dados real (data/supabase.js).
// Não é importado por nenhuma rota em produção.

let categorias = [
    { id: 1, nome: 'Classicas' },
    { id: 2, nome: 'Especiais' },
    { id: 3, nome: 'Bebidas' }
];

let produtos = [
    {
        id: 1,
        categoriaId: 1,
        nome: "Pizza Calabresa",
        descricao: "Calabresa fatiada, cebola, mozzarella e orégano",
        preco: 48.90,
        imagem: "https://img77.uenicdn.com/image/upload/v1612909110/business/f919def1-92cc-4aaa-906d-07447acb469b.jpg"
    },
    {
        id: 2,
        categoriaId: 1,
        nome: "Pizza Carne Seca",
        descricao: "Carne seca desfiada, cebola, mozzarella e catupiry",
        preco: 52.90,
        imagem: "https://restauranteviaferrea.com.br/wp-content/uploads/2017/05/Baggio-Pizzeria-e-Focacceria-Carne-Seca.jpg"
    },
    {
        id: 3,
        categoriaId: 3,
        nome: "Refrigerante",
        descricao: "Lata 350ml (Coca-Cola, Guaraná, Sprite)",
        preco: 6.90,
        imagem: "https://assets.jokrtech.com/PROD_150304014_P1_2ee4f83ea3.png"
    },
    {
        id: 4,
        categoriaId: 3,
        nome: "Água Mineral",
        descricao: "Água mineral gelada (500ml)",
        preco: 4.90,
        imagem: "https://www.imigrantesbebidas.com.br/bebida/images/products/full/2893-agua-mineral-crystal-sem-gas-500ml.jpg"
    }
];

module.exports = { categorias, produtos };
