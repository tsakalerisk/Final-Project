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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.util.UriComponentsBuilder;

import com.techpro.project.entity.Order;
import com.techpro.project.service.OrderServiceImpl;

import javassist.NotFoundException;

@RestController
@CrossOrigin
@RequestMapping("/orders")
public class OrdersController {
    @Autowired
    private OrderServiceImpl orderService;

    @GetMapping
    public ResponseEntity<List<Order>> getOrders() {
        return ResponseEntity.ok().body(orderService.getOrders());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Integer id) {
        return ResponseEntity.ok().body(
                orderService.getOrderById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND)));
    }

    @PostMapping
    public ResponseEntity<Void> createOrder(Integer personId, UriComponentsBuilder ucb) {
        Order savedOrder;
        try {
            savedOrder = orderService.createOrder(personId);
            URI location = ucb.path("/orders/{id}").buildAndExpand(savedOrder.getId()).toUri();
            return ResponseEntity.created(location).build();
        } catch (NotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }

    @PostMapping("/{orderId}/add_item")
    public ResponseEntity<Void> addItemToOrder(@PathVariable Integer orderId, Integer itemId, Integer quantity,
            UriComponentsBuilder ucb) {
        try {
            orderService.addItemToOrder(orderId, itemId, quantity);
            URI location = ucb.path("/orders/{id}").buildAndExpand(orderId).toUri();
            return ResponseEntity.created(location).build();
        } catch (NotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrderById(@PathVariable Integer id) {
        if (!orderService.getOrderById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        orderService.deleteOrderById(id);
        return ResponseEntity.noContent().build();
    }
}
