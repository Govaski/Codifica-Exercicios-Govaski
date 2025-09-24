package org.example.ex5;

import java.math.BigDecimal;

public class CartaoCredito extends FormaPagamento {
    private final String numeroCartao;

    @Override
    public Boolean validarPagamento() throws PagamentoInvalidoException {
        try {
            if (!numeroCartao.matches("\\d{16}")) {
                throw new PagamentoInvalidoException("Numero do cartao invalido");
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
            System.out.println("Pagamento de R$" + valor + " será efetuado no cartão.");
        }
    }

    public CartaoCredito(String numeroCartao) {
        this.numeroCartao = numeroCartao;
    }
}
