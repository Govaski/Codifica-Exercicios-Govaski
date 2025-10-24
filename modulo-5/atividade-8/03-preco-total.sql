-- 3) Liste todas as comandas (código, data, mesa e nome do cliente) mais uma coluna com o valor total da comanda. Ordene por data esta listagem;

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
ORDER BY comanda.data;