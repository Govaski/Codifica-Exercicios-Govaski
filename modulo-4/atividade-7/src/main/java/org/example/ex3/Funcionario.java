package org.example.ex3;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public abstract class Funcionario {
    protected String nome;
    protected BigDecimal salario;

    public abstract BigDecimal calcularBonus();
    public abstract void print();

    public String getNome() {
        return nome;
    }

    public BigDecimal getSalario() {
        return salario;
    }

    public Funcionario(String nome, BigDecimal salario) {
        this.nome = nome;

        if(salario.compareTo((new BigDecimal(0))) > 0) {
            this.salario = salario;
        } else {
            throw new IllegalArgumentException("Salario deve ser maior que 0");
        }
    }
}

class Gerente extends Funcionario {
    public Gerente(String nome, BigDecimal salario) {
        super(nome, salario);
    }

    @Override
    public BigDecimal calcularBonus() {
        return this.salario.multiply(BigDecimal.valueOf(0.20));
    }

    @Override
    public void print(){
        System.out.printf("Gerente: %s | %s | %s\n", this.nome, this.salario, this.calcularBonus());
    }
}

class Programador extends Funcionario {
    public Programador(String nome, BigDecimal salario) {
        super(nome, salario);
    }

    @Override
    public BigDecimal calcularBonus() {
        return this.salario.multiply(BigDecimal.valueOf(0.10));
    }

    @Override
    public void print(){
        System.out.printf("Progamador: %s | R$%s | R$%s\n", this.nome, this.salario, this.calcularBonus());
    }
}


class Main {
    public static void main(String[] args) {
        List<Funcionario> funcionarios = new ArrayList<>();
        funcionarios.add(new Gerente("John", new BigDecimal(8000)));
        funcionarios.add(new Programador("Doe", new BigDecimal(3500)));
        funcionarios.add(new Programador("Mary", new BigDecimal(4500)));
        funcionarios.add(new Programador("Jane", new BigDecimal(2000)));

        System.out.println("Cargo | Nome | Salário | Bônus");
        funcionarios.stream().forEach(Funcionario::print);

    }
}


