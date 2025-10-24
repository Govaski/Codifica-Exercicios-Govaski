-- Gerando as tabelas do banco de dados

CREATE TABLE comanda (
	id BIGINT PRIMARY KEY,
	data TIMESTAMP NOT NULL,
	nr_mesa INTEGER NOT NULL,
	nome_cliente VARCHAR(255) NOT NULL
);

CREATE TABLE item_comanda (
	id BIGINT PRIMARY KEY,
	quantidade INTEGER NOT NULL,
	fk_cardapio BIGINT NOT NULL,
	fk_comanda BIGINT NOT NULL
);

CREATE TABLE cardapio (
	id BIGINT PRIMARY KEY,
	nome VARCHAR(255) UNIQUE NOT NULL,
	descricao VARCHAR(510) NOT NULL,
	preco NUMERIC(15, 2) NOT NULL
);

-- Gerando dados simulados

INSERT INTO cardapio (id, nome, descricao, preco) VALUES
(1, 'Espresso', 'Café curto e forte, servido sem leite.', 6.50),
(2, 'Cappuccino', 'Café com leite vaporizado e espuma.', 8.00),
(3, 'Latte', 'Café com bastante leite vaporizado.', 8.50),
(4, 'Mocha', 'Café com leite, chocolate e chantilly.', 9.00),
(5, 'Macchiato', 'Espresso com um toque de leite vaporizado.', 7.00);

INSERT INTO comanda (id, data, nr_mesa, nome_cliente) VALUES
(1001, CURRENT_TIMESTAMP, 5, 'João Silva'),
(1002, '2025-10-24 09:15:00', 3, 'Maria Oliveira'),
(1003, '2025-10-24 10:30:00', 7, 'Carlos Mendes'),
(1004, '2025-10-24 11:45:00', 2, 'Ana Paula'),
(1005, '2025-10-24 13:00:00', 6, 'Rafael Costa'),
(1006, '2025-10-24 14:15:00', 4, 'Bruna Lima'),
(1007, '2025-10-24 15:00:00', 1, 'Felipe Rocha'),
(1008, '2025-10-24 15:45:00', 8, 'Juliana Souza'),
(1009, '2025-10-24 16:30:00', 9, 'Thiago Martins'),
(1010, '2025-10-24 17:15:00', 10, 'Larissa Alves');

INSERT INTO item_comanda (id, quantidade, fk_cardapio, fk_comanda) VALUES
(5001, 2, 1, 1001),  -- 2 Espressos para João Silva
(5002, 1, 2, 1001),  -- 1 Cappuccino para João Silva

(5003, 1, 3, 1002),  -- 1 Latte para Maria
(5004, 2, 2, 1002),  -- 2 Cappuccinos para Maria

(5005, 1, 4, 1003),  -- 1 Mocha para Carlos
(5006, 1, 1, 1003),  -- 1 Espresso para Carlos

(5007, 3, 1, 1004),  -- 3 Espressos para Ana
(5008, 1, 5, 1004),  -- 1 Macchiato para Ana

(5009, 2, 2, 1005),  -- 2 Cappuccinos para Rafael
(5010, 1, 4, 1005),  -- 1 Mocha para Rafael

(5011, 1, 1, 1006),  -- 1 Espresso para Bruna

(5012, 2, 3, 1007),  -- 2 Lattes para Felipe

(5013, 1, 5, 1008),  -- 1 Macchiato para Juliana

(5014, 3, 2, 1009),  -- 3 Cappuccinos para Thiago

(5015, 1, 4, 1010);  -- 1 Mocha para Larissa