package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.backend.model.Todo;
import com.example.backend.repository.TodoRepo;

import java.util.List;

@RestController
@RequestMapping("/todos")
@CrossOrigin(origins = "http://localhost:3000") // Allow React app to access the API
public class TodoController {
    
    @Autowired
    private TodoRepo todoRepo;
    
    // Get all todos
    @GetMapping
    public ResponseEntity<List<Todo>> getAllTodos() {
        List<Todo> todos = todoRepo.getAllTodos();
        return ResponseEntity.ok(todos);
    }
    
    // Add a new todo
    @PostMapping
    public ResponseEntity<String> addTodo(@RequestBody Todo todo) {
        Todo savedTodo = todoRepo.saveTodo(todo);
        if( savedTodo == null ) {
            return ResponseEntity.status(500).body("Error saving todo");
        }
        return ResponseEntity.ok("Todo added successfully");
    }
    
    // Get a todo by ID
    @GetMapping("/{id}")
    public ResponseEntity<Todo> getTodoById(@PathVariable int id) {
        Todo todo = todoRepo.getTodoById(id);
        if (todo != null) {
            return ResponseEntity.ok(todo);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
