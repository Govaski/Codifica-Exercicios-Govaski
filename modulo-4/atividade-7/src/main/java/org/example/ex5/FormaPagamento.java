package org.example.ex5;

import java.math.BigDecimal;

public abstract class FormaPagamento {
    public abstract Boolean validarPagamento() throws PagamentoInvalidoException;
    public abstract void processarPagamento(BigDecimal valor) throws PagamentoInvalidoException;
}
