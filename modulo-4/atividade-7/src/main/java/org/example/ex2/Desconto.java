package org.example.ex2;

import org.example.ex1.Produto;

public class Desconto {
    public static void main(String[] args) {
        Produto produto = new Produto("Produto", 2000, 5);
        produto.print();
        System.out.println("Após 27% de desconto: " + (float)produto.aplicarDesconto(27)/100);

        System.out.println("Após 61% de desconto: " + (float)produto.aplicarDesconto(61)/100);
    }
}