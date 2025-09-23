package org.example.ex4;

public class Trem implements IMeioTransporte {
    private int velocidade = 0;
    private final int velocidadeMax = 300;

    @Override
    public void acelerar() throws OperacaoInvalidaException {
        if (velocidade + 50 > velocidadeMax)
            throw new OperacaoInvalidaException("Trem não pode ultrapassar 300 km/h");
        velocidade += 50;
        System.out.println("Trem acelerou para " + velocidade + " km/h");
    }

    @Override
    public void frear() throws OperacaoInvalidaException {
        if (velocidade - 50 < 0)
            throw new OperacaoInvalidaException("Trem já está parado");
        velocidade -= 50;
        System.out.println("Trem freou para " + velocidade + " km/h");
    }
}
