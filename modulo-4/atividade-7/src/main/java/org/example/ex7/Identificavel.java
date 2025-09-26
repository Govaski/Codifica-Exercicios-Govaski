package org.example.ex7;

import java.util.UUID;

public abstract class Identificavel {
    private UUID id;
    UUID getId() {
        return id;
    }

    public Identificavel() {
        this.id = UUID.randomUUID();
    }
}
