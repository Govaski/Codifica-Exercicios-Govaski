package org.example.ex4;

public class Carro implements IMeioTransporte {
    private int velocidade = 0;
    private int velocidadeMax = 180;

    @Override
    public void acelerar() throws OperacaoInvalidaException {
        if (velocidade + 20 > velocidadeMax)
            throw new OperacaoInvalidaException("Carro não pode ultrapassar 180 km/h");
        velocidade += 20;
        System.out.println("Carro acelerou para " + velocidade + " km/h");
    }

    @Override
    public void frear() throws OperacaoInvalidaException {
        if (velocidade - 20 < 0)
            throw new OperacaoInvalidaException("Carro já está parado");
        velocidade -= 20;
        System.out.println("Carro freou para " + velocidade + " km/h");
    }
}
