package org.example.ex8;

import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        CalculadoraFrete sedex = new Sedex();
        CalculadoraFrete pac = new Pac();
        CalculadoraFrete retirada = new RetiradaNaLoja();
        CalculadoraFrete promocao = pedido ->
                pedido.getValor().compareTo(new BigDecimal("200.00")) > 0 ?
                        BigDecimal.ZERO : new BigDecimal("25.00");

        Pedido pedido = new Pedido("94000-000", new BigDecimal("150.00"), sedex);
        System.out.println("Frete Sedex: R$" + pedido.calcularFrete());

        pedido.trocarEstrategia(pac);
        System.out.println("Frete PAC: R$" + pedido.calcularFrete());

        pedido.trocarEstrategia(retirada);
        System.out.println("Frete Retirada na Loja: R$" + pedido.calcularFrete());

        pedido.trocarEstrategia(promocao);
        System.out.println("Frete Promocional: R$" + pedido.calcularFrete());

        // Teste com valor acima do limite
        Pedido pedidoPremium = new Pedido("94000-000", new BigDecimal("250.00"), promocao);
        System.out.println("Frete Promocional (acima do limite): R$" + pedidoPremium.calcularFrete());

        // Teste com CEP inválido
        try {
            Pedido pedidoInvalido = new Pedido("123", new BigDecimal("100.00"), sedex);
        } catch (IllegalArgumentException e) {
            System.out.println("Erro: " + e.getMessage());
        }
    }
}
