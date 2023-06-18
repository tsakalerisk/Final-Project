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
    public void addItemToOrder(Integer orderId, Integer itemId, Integer quantity) throws NotFoundException, org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
    public void deleteOrderById(Integer id);
}
