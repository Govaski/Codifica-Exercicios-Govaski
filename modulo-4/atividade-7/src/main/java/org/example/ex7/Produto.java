package org.example.ex7;

import java.math.BigDecimal;

public class Produto extends Identificavel{
    private String nome;
    private BigDecimal preco;

    public String getNome() {
        return nome;
    }

    public BigDecimal getPreco() {
        return preco;
    }

    public Produto(String nome, BigDecimal preco) {
        super();
        this.nome = nome;
        this.preco = preco;
    }
}
