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

import com.techpro.project.entity.Order;
import com.techpro.project.service.OrderServiceImpl;

import io.swagger.v3.oas.annotations.Operation;
import javassist.NotFoundException;

@RestController
@CrossOrigin
@RequestMapping("/orders")
public class OrdersController {
    @Autowired
    private OrderServiceImpl orderService;

    @Operation(summary = "Get all orders")
    @GetMapping
    public ResponseEntity<List<Order>> getOrders() {
        return ResponseEntity.ok().body(orderService.getOrders());
    }

    @Operation(summary = "Get order by id")
    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Integer id) {
        return ResponseEntity.ok().body(
                orderService.getOrderById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND)));
    }

    @Operation(summary = "Create order", description = "Creates a new order with the given personId, the date and time is set automatically")
    @PostMapping
    public ResponseEntity<Order> createOrder(Integer personId, UriComponentsBuilder ucb) {
        try {
            Order savedOrder = orderService.createOrder(personId);
            URI location = ucb.path("/orders/{id}").buildAndExpand(savedOrder.getId()).toUri();
            return ResponseEntity.created(location).body(savedOrder);
        } catch (NotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }

    @Operation(summary = "Update order by id")
    @PutMapping("/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable Integer id, Order order) {
        Order updatedOrder = orderService.updateOrder(id, order);
        if (updatedOrder == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(updatedOrder);
    }

    @Operation(summary = "Add item to order", description = "Adds the specified amount of the given item to the order with the given orderId")
    @PostMapping("/{orderId}/add_item")
    public ResponseEntity<Order> addItemToOrder(@PathVariable Integer orderId, Integer itemId, Integer quantity,
            UriComponentsBuilder ucb) {
        try {
            Order order = orderService.addItemToOrder(orderId, itemId, quantity);
            URI location = ucb.path("/orders/{id}").buildAndExpand(orderId).toUri();
            return ResponseEntity.created(location).body(order);
        } catch (NotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }

    @Operation(summary = "Delete order by id")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrderById(@PathVariable Integer id) {
        if (!orderService.getOrderById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        orderService.deleteOrderById(id);
        return ResponseEntity.noContent().build();
    }
}
