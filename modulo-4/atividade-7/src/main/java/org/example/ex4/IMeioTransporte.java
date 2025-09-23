package org.example.ex4;

public interface IMeioTransporte {
    void acelerar() throws OperacaoInvalidaException;
    void frear() throws OperacaoInvalidaException;
}
