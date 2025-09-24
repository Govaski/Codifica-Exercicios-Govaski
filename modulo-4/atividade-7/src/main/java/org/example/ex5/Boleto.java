package org.example.ex5;

import java.math.BigDecimal;

public class Boleto extends FormaPagamento {
    private final String numeroBoleto;

    @Override
    public Boolean validarPagamento() throws PagamentoInvalidoException {
        try {
            if (!numeroBoleto.matches("\\d{47}")) {
                throw new PagamentoInvalidoException("Numero do boleto invalido");
            } else {
                return true;
            }
        } catch (PagamentoInvalidoException e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public void processarPagamento(BigDecimal valor) throws PagamentoInvalidoException {
        if (validarPagamento()){
            System.out.println("Pagamento de R$" + valor + " será efetuado no boleto.");
        }
    }

    public Boleto(String numeroCartao) {
        this.numeroBoleto = numeroCartao;
    }
}
