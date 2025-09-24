package org.example.ex6;

import java.math.BigDecimal;

public final class Produto {
    private final String nome;
    private final Dinheiro preco;

    public String getNome() {
        return nome;
    }

    public Dinheiro getPreco() {
        return preco;
    }

    public Produto(String nome, Dinheiro preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
