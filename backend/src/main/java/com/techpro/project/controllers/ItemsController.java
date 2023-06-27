package com.techpro.project.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.util.UriComponentsBuilder;

import com.techpro.project.entity.Item;
import com.techpro.project.service.ItemServiceImpl;

import io.swagger.v3.oas.annotations.Operation;

@RestController
@CrossOrigin
@RequestMapping("/items")
public class ItemsController {
    @Autowired
    private ItemServiceImpl itemService;

    @Operation(summary = "Get all items")
    @GetMapping
    public ResponseEntity<List<Item>> getItems() {
        return ResponseEntity.ok().body(itemService.getItems());
    }

    @Operation(summary = "Get item by id")
    @GetMapping("/{id}")
    public ResponseEntity<Item> getItemById(@PathVariable Integer id) {
        return ResponseEntity.ok().body(
                itemService.getItemById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND)));
    }

    @Operation(summary = "Create item")
    @PostMapping
    public ResponseEntity<Item> createItem(Item item, UriComponentsBuilder ucb) {
        Item savedItem = itemService.createItem(item);
        URI location = ucb.path("/items/{id}").buildAndExpand(savedItem.getId()).toUri();
        return ResponseEntity.created(location).body(savedItem);
    }

    @Operation(summary = "Update item by id")
    @PutMapping("/{id}")
    public ResponseEntity<Item> updateItem(@PathVariable Integer id, Item item) {
        Item updatedItem = itemService.updateItem(id, item);
        if (updatedItem == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(updatedItem);
    }

    @Operation(summary = "Delete item by id")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItemById(@PathVariable Integer id) {
        if (!itemService.getItemById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        itemService.deleteItemById(id);
        return ResponseEntity.noContent().build();
    }
}
