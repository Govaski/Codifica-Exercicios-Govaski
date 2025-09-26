package org.example.ex8;

import java.math.BigDecimal;

public class Pac implements CalculadoraFrete {
    public BigDecimal calcular(Pedido pedido) {
        return new BigDecimal("20.00");
    }
}
