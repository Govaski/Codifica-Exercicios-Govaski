package org.example.ex6;

import java.math.BigDecimal;
import java.util.Objects;

public final class Dinheiro {
    private final BigDecimal valor;
    private final Moeda moeda;

    public BigDecimal getValor() {
        return valor;
    }

    public Moeda getMoeda() {
        return moeda;
    }

    public Dinheiro(BigDecimal valor, Moeda moeda) {
        if (valor.compareTo(new BigDecimal(0)) < 0) {
            throw new IllegalArgumentException("Valor não pode ser negativo");
        }

        this.valor = valor;
        this.moeda = moeda;
    }

    @Override
    public int hashCode() {
        return Objects.hash(valor, moeda);
    }

    @Override
    public boolean equals(Object obj) {
        return this.hashCode() == obj.hashCode();
    }
}

enum Moeda {REAL, DOLAR, EURO}

