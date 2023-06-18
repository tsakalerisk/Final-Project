package com.techpro.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techpro.project.entity.OrderDetail;

public interface OrderdetailsRepository extends JpaRepository<OrderDetail, Integer> {

}
