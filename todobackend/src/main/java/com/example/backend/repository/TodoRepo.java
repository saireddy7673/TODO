package com.example.backend.repository;

import java.util.List;
import com.example.backend.model.Todo;

public interface TodoRepo {
    Todo saveTodo(Todo todo);
    Todo getTodoById(int id);
    List<Todo> getAllTodos();
}
