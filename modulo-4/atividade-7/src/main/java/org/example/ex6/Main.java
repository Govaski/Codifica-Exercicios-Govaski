package org.example.ex6;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Produto teclado = new Produto("Teclado", new Dinheiro(BigDecimal.valueOf(50), Moeda.REAL));
        Produto keyboard = new Produto("Keyboard", new Dinheiro(BigDecimal.valueOf(9.38), Moeda.DOLAR));
        Produto tastatur = new Produto("Tastatur", new Dinheiro(BigDecimal.valueOf(8), Moeda.EURO));

        Carrinho carrinho = new Carrinho(new ArrayList<>());
        System.out.println("Adicionando teclado");
        carrinho = carrinho.adicionar(new ItemCarrinho(teclado, 5));
        carrinho.print();

        System.out.println("Adicionando keyboard");
        carrinho = carrinho.adicionar(new ItemCarrinho(keyboard, 10));
        carrinho.print();

        System.out.println("Adicionando tastatur");
        carrinho = carrinho.adicionar(new ItemCarrinho(tastatur, 15));
        carrinho.print();

        System.out.println("\nPreço Sem Desconto:");
        carrinho.print();
        System.out.println("Total: " + carrinho.getTotal().setScale(2, RoundingMode.CEILING));

        System.out.println("\nPreço com 30% de Desconto:");
        carrinho = carrinho.aplicarCupom(30);
        carrinho.print();
        System.out.println("Total: " + carrinho.getTotal().setScale(2, RoundingMode.CEILING));

    }
}
