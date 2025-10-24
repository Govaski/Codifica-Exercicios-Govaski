-- 2) Apresente todas as comandas (código, data, mesa e nome do cliente) e os itens da comanda (código comanda, nome do café, descricão, quantidade, preço unitário e preço total do café) destas ordenados data e código da comanda e, também o nome do café;

SELECT 
	comanda.id, comanda.data, comanda.nr_mesa, comanda.nome_cliente, 
	item_comanda.quantidade, 
	cardapio.nome AS cafe, cardapio.descricao, cardapio.preco
FROM comanda 
JOIN item_comanda ON comanda.id = item_comanda.fk_comanda  
JOIN cardapio ON item_comanda.fk_cardapio = cardapio.id
ORDER BY comanda.data, comanda.id, cardapio.nome; 