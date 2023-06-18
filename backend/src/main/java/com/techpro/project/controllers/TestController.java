package com.techpro.project.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techpro.project.entity.Item;
import com.techpro.project.entity.Order;
import com.techpro.project.entity.OrderDetail;
import com.techpro.project.entity.Person;
import com.techpro.project.repository.ItemsRepository;
import com.techpro.project.repository.OrderdetailsRepository;
import com.techpro.project.repository.OrdersRepository;
import com.techpro.project.repository.PeopleRepository;

@RestController
@CrossOrigin
@RequestMapping("/test")
public class TestController {
    @Autowired
    private PeopleRepository peopleRepository;

    @Autowired
    private ItemsRepository itemsRepository;

    @Autowired
    private OrdersRepository ordersRepository;

    @Autowired
    private OrderdetailsRepository orderdetailsRepository;

    @GetMapping("/people")
    public ResponseEntity<List<Person>> getPeople() {
        return ResponseEntity.ok().body(peopleRepository.findAll());
    }

    @GetMapping("/items")
    public ResponseEntity<List<Item>> getItems() {
        return ResponseEntity.ok().body(itemsRepository.findAll());
    }

    @GetMapping("/orders")
    public ResponseEntity<List<Order>> getOrders() {
        return ResponseEntity.ok().body(ordersRepository.findAll());
    }

    @GetMapping("/order_details")
    public ResponseEntity<List<OrderDetail>> getOrderDetails() {
        return ResponseEntity.ok().body(orderdetailsRepository.findAll());
    }
}
