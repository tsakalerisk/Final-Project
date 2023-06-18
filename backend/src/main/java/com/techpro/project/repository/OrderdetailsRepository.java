package com.techpro.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techpro.project.entity.OrderDetail;

import jakarta.transaction.Transactional;

public interface OrderdetailsRepository extends JpaRepository<OrderDetail, Integer> {
    @Transactional
    void deleteByOrderId(Integer orderId);

}
