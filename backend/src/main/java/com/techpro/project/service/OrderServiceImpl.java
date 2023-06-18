package com.techpro.project.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.techpro.project.entity.Item;
import com.techpro.project.entity.Order;
import com.techpro.project.entity.OrderDetail;
import com.techpro.project.entity.Person;
import com.techpro.project.repository.ItemsRepository;
import com.techpro.project.repository.OrderdetailsRepository;
import com.techpro.project.repository.OrdersRepository;
import com.techpro.project.repository.PeopleRepository;

import javassist.NotFoundException;

@Component
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrdersRepository ordersRepository;

    @Autowired
    private ItemsRepository itemsRepository;

    @Autowired
    private PeopleRepository peopleRepository;

    @Autowired OrderdetailsRepository orderdetailsRepository;

    @Override
    public List<Order> getOrders() {
        return ordersRepository.findAll();
    }

    @Override
    public Optional<Order> getOrderById(Integer id) {
        return ordersRepository.findById(id);
    }

    @Override
    public Order createOrder(Integer personId) throws NotFoundException {
        Order order = new Order();
        Person person = peopleRepository.findById(personId).orElseThrow(() -> new NotFoundException("Person not found"));
        order.setPerson(person);
        order.setDateTime(LocalDateTime.now());
        return ordersRepository.save(order);
    }

    @Override
    public void addItemToOrder(Integer orderId, Integer itemId, Integer quantity) throws NotFoundException {
        Order order = ordersRepository.findById(orderId).orElseThrow(() -> new NotFoundException("Order not found"));
        Item item = itemsRepository.findById(itemId).orElseThrow(() -> new NotFoundException("Item not found"));
        orderdetailsRepository.save(new OrderDetail(null, order, item, quantity));
    }

    @Override
    public void deleteOrderById(Integer id) {
        orderdetailsRepository.deleteByOrderId(id);
        ordersRepository.deleteById(id);
    }

}
