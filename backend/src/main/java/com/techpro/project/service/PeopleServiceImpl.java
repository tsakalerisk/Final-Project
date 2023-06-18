package com.techpro.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.techpro.project.entity.Person;
import com.techpro.project.repository.PeopleRepository;

@Component
public class PeopleServiceImpl implements PeopleService {
    @Autowired
    private PeopleRepository peopleRepository;

    @Override
    public List<Person> getPeople() {
        return peopleRepository.findAll();
    }

    @Override
    public Optional<Person> getPersonById(Integer id) {
        return peopleRepository.findById(id);
    }

    @Override
    public Person createPerson(Person person) {
        return peopleRepository.save(person);
    }

    @Override
    public void deletePersonById(Integer id) {
        peopleRepository.deleteById(id);
    }
    
}
