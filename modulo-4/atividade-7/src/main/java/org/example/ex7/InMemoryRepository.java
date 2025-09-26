package org.example.ex7;

import java.util.*;

public class InMemoryRepository<T extends Identificavel> implements IRepository {
    private Map<UUID, T> storage = new HashMap<>();

    @Override
    public void salvar(Identificavel data) {
        storage.put(data.getId(), (T) data);
    }

    @Override
    public Optional buscarPorId(Object id) {
        return Optional.ofNullable(storage.get(id));
    }

    @Override
    public List<T> listarTodos() {
        return new ArrayList<>(storage.values());
    }

    @Override
    public void remover(Object id) throws EntidadeNaoEncontradaException {
        try {
            if (!storage.containsKey(id)) {
                throw new EntidadeNaoEncontradaException("");
            }
            storage.remove(id);
        } catch (EntidadeNaoEncontradaException e) {
            e.printStackTrace();
        }

    }
}

class EntidadeNaoEncontradaException extends Exception {
    public EntidadeNaoEncontradaException(String message) {
        super(message);
    }
}
