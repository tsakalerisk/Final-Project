package com.techpro.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techpro.project.entity.Person;

public interface PeopleRepository extends JpaRepository<Person, Integer> {
}
