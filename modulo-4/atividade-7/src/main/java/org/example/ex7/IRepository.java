package org.example.ex7;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

public interface IRepository <T extends Identificavel, ID> {
    void salvar(T data);
    Optional<T> buscarPorId(ID id);
    List<T> listarTodos();
    void remover(ID id) throws EntidadeNaoEncontradaException;
}
