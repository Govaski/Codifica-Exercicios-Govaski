-- 4) Faça a mesma listagem das comandas da questão anterior (6), mas traga apenas as comandas que possuem mais do que um tipo de café na comanda;

SELECT 
	comanda.id,
	comanda.data,
	comanda.nr_mesa,
	comanda.nome_cliente,
	SUM(item_comanda.quantidade * cardapio.preco) AS total
FROM comanda
JOIN item_comanda ON comanda.id = item_comanda.fk_comanda
JOIN cardapio ON item_comanda.fk_cardapio = cardapio.id
GROUP BY comanda.id
HAVING COUNT(DISTINCT item_comanda.fk_cardapio) > 1
ORDER BY comanda.data;