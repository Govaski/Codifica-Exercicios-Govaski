package org.example.ex4;

public class Bicicleta implements IMeioTransporte {
    private int velocidade = 0;
    private final int velocidadeMax = 40;

    @Override
    public void acelerar() throws OperacaoInvalidaException {
        if (velocidade + 5 > velocidadeMax)
            throw new OperacaoInvalidaException("Bicicleta não pode ultrapassar 40 km/h");
        velocidade += 5;
        System.out.println("Bicicleta acelerou para " + velocidade + " km/h");
    }

    @Override
    public void frear() throws OperacaoInvalidaException {
        if (velocidade - 5 < 0)
            throw new OperacaoInvalidaException("Bicicleta já está parada");
        velocidade -= 5;
        System.out.println("Bicicleta freou para " + velocidade + " km/h");
    }
}