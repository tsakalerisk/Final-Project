package com.techpro.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techpro.project.entity.Item;

public interface ItemsRepository extends JpaRepository<Item, Integer> {

}
