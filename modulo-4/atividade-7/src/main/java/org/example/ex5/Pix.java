package org.example.ex5;

import java.math.BigDecimal;

public class Pix extends FormaPagamento{
    private final String chavePix;

    @Override
    public Boolean validarPagamento() throws PagamentoInvalidoException {
        try {
            if (!chavePix.matches("\\d{9}")) {
                throw new PagamentoInvalidoException("Chave Pix invalido");
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
            System.out.println("Pagamento de R$" + valor + " será efetuado no Pix.");
        }
    }

    public Pix(String numeroCartao) {
        this.chavePix = numeroCartao;
    }
}
