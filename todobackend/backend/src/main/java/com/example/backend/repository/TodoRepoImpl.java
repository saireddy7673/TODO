package com.example.backend.repository;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.backend.model.Todo;

@Repository
public class TodoRepoImpl implements TodoRepo {

    HashMap<Integer, Todo> todoStore = new HashMap<>();
    int idCounter = 1;
    
    @Override
    public Todo saveTodo(Todo todo) {
        todoStore.put(idCounter++, todo);
        return todo;
    }

    @Override
    public Todo getTodoById(int id) {
        return todoStore.get(id);
    }

    @Override
    public List<Todo> getAllTodos() {
       return new java.util.ArrayList<>(todoStore.values());
    }

}
