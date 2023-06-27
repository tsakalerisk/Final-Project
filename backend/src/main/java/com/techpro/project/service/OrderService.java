package com.techpro.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.techpro.project.entity.Order;

import javassist.NotFoundException;

@Service
public interface OrderService {
    public List<Order> getOrders();
    public Optional<Order> getOrderById(Integer id);
    public Order createOrder(Integer personId) throws NotFoundException;
    public Order updateOrder(Integer id, Order order);
    public Order addItemToOrder(Integer orderId, Integer itemId, Integer quantity) throws NotFoundException;
    public void deleteOrderById(Integer id);
}
