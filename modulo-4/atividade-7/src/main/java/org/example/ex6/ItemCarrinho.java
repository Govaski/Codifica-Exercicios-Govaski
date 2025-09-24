package org.example.ex6;

public class ItemCarrinho {
    private final Produto produto;
    private final int quantidade;

    public ItemCarrinho(Produto produto, int quantidade) {
        if (produto == null || quantidade < 1) {
            throw new RuntimeException(new IllegalArgumentException("Produto é nulo ou quantidade abaixo de 1"));
        }
        this.produto = produto;
        this.quantidade = quantidade;
    }

    public Produto getProduto() {
        return produto;
    }

    public int getQuantidade() {
        return quantidade;
    }
}
