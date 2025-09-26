package org.example.ex8;

import java.math.BigDecimal;

public class Sedex implements CalculadoraFrete {
    public BigDecimal calcular(Pedido pedido) {
        return new BigDecimal("30.00");
    }
}

