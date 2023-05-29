package com.techpro.project.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.techpro.project.entity.people;

@Repository
public interface PeopleRepository extends CrudRepository<people, Integer> {
}