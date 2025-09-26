package org.example.ex7;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) throws EntidadeNaoEncontradaException {
        InMemoryRepository<Produto> repo = new InMemoryRepository<Produto>();
        Produto Computador = new Produto("Computador", BigDecimal.valueOf(2100));
        Produto Mouse = new Produto("Mouse", BigDecimal.valueOf(30));
        Produto Teclado = new Produto("Teclado", BigDecimal.valueOf(50));

        System.out.println("Adicionando Computador");
        repo.salvar(Computador);
        List<Produto> lista = repo.listarTodos();
        lista.stream().forEach(f -> System.out.println(f.getNome() + " | R$" + f.getPreco().toString() + " | " + f.getId()));

        System.out.println("\nAdicionando Mouse");
        repo.salvar(Mouse);
        lista = repo.listarTodos();
        lista.stream().forEach(f -> System.out.println(f.getNome() + " | R$" + f.getPreco().toString() + " | " + f.getId()));

        System.out.println("\nAdicionando Teclado");
        repo.salvar(Teclado);
        lista = repo.listarTodos();
        lista.stream().forEach(f -> System.out.println(f.getNome() + " | R$" + f.getPreco().toString() + " | " + f.getId()));

        System.out.println("\nRemovendo Mouse");
        repo.remover(Mouse.getId());
        lista = repo.listarTodos();
        lista.stream().forEach(f -> System.out.println(f.getNome() + " | R$" + f.getPreco().toString() + " | " + f.getId()));
    }
}
