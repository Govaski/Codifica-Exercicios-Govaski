package org.example.ex6;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.List;

public final class Carrinho {
    private final List<ItemCarrinho> items;

    public Carrinho(List<ItemCarrinho> items) {
        this.items = items;
    }

    public List<ItemCarrinho> getItems() {
        return items;
    }

    public Carrinho adicionar(ItemCarrinho item) {
        List<ItemCarrinho> newList = items;
        newList.add(item);
        return new Carrinho(newList);
    }

    public Carrinho remover(ItemCarrinho item) {
        List<ItemCarrinho> newList = this.items;
        newList.remove(item);
        return new Carrinho(newList);
    }

    public void print() {
        for (ItemCarrinho item : items) {
            System.out.println(item.getProduto().getNome() + " | R$" + item.getProduto().getPreco().getValor().setScale(2, RoundingMode.CEILING) + " | " + item.getQuantidade() + " unidades");
        }
    }

    public BigDecimal getTotal() {
        BigDecimal sum = new BigDecimal(0);

        for (ItemCarrinho item : items) {
            BigDecimal v = item.getProduto().getPreco().getValor();
            sum = sum.add(v);
        }

        return sum;
    }

    public Carrinho aplicarCupom(float desconto) {
        if (desconto < 0) {
            throw new IllegalArgumentException("O desconto deve ser positivo");
        }
        if (desconto > 30) {
            throw new IllegalArgumentException("O desconto deve ser menor que 30");
        }

        List<ItemCarrinho> lista = new ArrayList<ItemCarrinho>();
        for (ItemCarrinho item : items) {
            BigDecimal precoDescontado = item.getProduto().getPreco().getValor();
            precoDescontado = precoDescontado.multiply(BigDecimal.valueOf(desconto/100));
            BigDecimal novoPreco = item.getProduto().getPreco().getValor().subtract(precoDescontado);

            Produto p = new Produto(item.getProduto().getNome(), new Dinheiro(novoPreco, item.getProduto().getPreco().getMoeda()));

            ItemCarrinho itemCarrinho = new ItemCarrinho(p, item.getQuantidade());
            lista.add(itemCarrinho);
        }
        return new Carrinho(lista);
    }

}
