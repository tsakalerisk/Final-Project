package com.techpro.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techpro.project.entity.Order;

public interface OrdersRepository extends JpaRepository<Order, Integer> {

}
