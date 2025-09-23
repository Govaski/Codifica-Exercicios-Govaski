package org.example.ex1;

public class Produto {
    private String nome;
    private int preco;
    private int quantidadeEmEstoque;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        try {
            if (nome != null && nome != "") {
                this.nome = nome;
            } else {
                throw new IllegalArgumentException("Argumento 'nome' não pode ser nulo ou vazio");
            }
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
        }
    }

    public int getPreco() {
        return preco;
    }

    public void setPreco(int preco) {
        try {
            if (preco > 0){
                this.preco = preco;
            } else {
                throw new IllegalArgumentException("Argumento 'preco' não pode ser menor que zero");
            }
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
        }
    }

    public int getQuantidadeEmEstoque() {
        return quantidadeEmEstoque;
    }

    public void setQuantidadeEmEstoque(int quantidadeEmEstoque) {
        try {
            if (quantidadeEmEstoque > 0) {
                this.quantidadeEmEstoque = quantidadeEmEstoque;
            } else {
                throw  new IllegalArgumentException("Argumento 'quantidadeEmEstoque' deve ser maior que 0");
            }
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
        }
    }

    public int aplicarDesconto(float desconto) {
        if (desconto <= 50 && desconto > 0) {
            float precoDescontado = getPreco() * (desconto/100);
            return (int)((float)getPreco()-precoDescontado);
        } else {
            throw new IllegalArgumentException();
        }
    }

    public void print() {
        System.out.println(nome + " | R$" + String.format("%.2f", ((float)preco)/100) + " | " + quantidadeEmEstoque + " unidades");
    }

    public Produto(String nome, int preco, int quantidadeEmEstoque) {
        setNome(nome);
        setPreco(preco);
        setQuantidadeEmEstoque(quantidadeEmEstoque);
    }

    public static void main(String[] args) {
        Produto mouse = new Produto("Mouse", 4000, 10);
        mouse.print();

        Produto teclado = new Produto("", 6000, 15);
        teclado.print();

        Produto monitor = new Produto("Monitor", -40000, 5);
        monitor.print();

        Produto mousePad = new Produto("Mouse Pad", 1000, -10);
        mousePad.print();
    }
}


