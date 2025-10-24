-- 5) Qual o total de faturamento por data? ordene por data esta consulta.

SELECT
    comanda.data::DATE,
    SUM(item_comanda.quantidade * cardapio.preco) AS total
FROM comanda
JOIN item_comanda ON comanda.id = item_comanda.fk_comanda
JOIN cardapio ON item_comanda.fk_cardapio = cardapio.id
GROUP BY comanda.data::DATE
ORDER BY comanda.data::DATE;