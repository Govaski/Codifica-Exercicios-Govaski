package org.example.ex8;

import java.math.BigDecimal;

public class Pedido {
    private String cep;
    private BigDecimal valor;
    private CalculadoraFrete estrategiaFrete;

    public String getCep() {
        return cep;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public CalculadoraFrete getEstrategiaFrete() {
        return estrategiaFrete;
    }

    public Pedido(String cep, BigDecimal valor, CalculadoraFrete estrategiaFrete) {
        if (!validarCep(cep)) {
            throw new IllegalArgumentException("CEP inválido: " + cep);
        }

        this.cep = cep;
        this.valor = valor;
        this.estrategiaFrete = estrategiaFrete;
    }

    private boolean validarCep(String cep) {
        return cep != null && cep.matches("\\d{5}-\\d{3}");
    }

    public void trocarEstrategia(CalculadoraFrete novaEstrategia) {
        this.estrategiaFrete = novaEstrategia;
    }

    public BigDecimal calcularFrete() {
        return estrategiaFrete.calcular(this);
    }
}
