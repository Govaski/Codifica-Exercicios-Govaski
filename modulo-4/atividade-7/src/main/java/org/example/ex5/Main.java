package org.example.ex5;

import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) throws PagamentoInvalidoException {
        CartaoCredito cartao = new CartaoCredito("0123456789012345");
        cartao.processarPagamento(BigDecimal.valueOf(32));

        Boleto boleto = new Boleto("13057829416350872391460538720194653280173495098");
        boleto.processarPagamento(BigDecimal.valueOf(1024));

        Pix pix = new Pix("123456789");
        pix.processarPagamento(BigDecimal.valueOf(7));

        CartaoCredito cartao2 = new CartaoCredito("");
        cartao2.processarPagamento(BigDecimal.valueOf(512));
    }
}
