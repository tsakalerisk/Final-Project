package com.techpro.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.techpro.project.entity.Person;

@Service
public interface PeopleService {
    public List<Person> getPeople();
    public Optional<Person> getPersonById(Integer id);
    public Person createPerson(Person person);
    public void deletePersonById(Integer id);
}
