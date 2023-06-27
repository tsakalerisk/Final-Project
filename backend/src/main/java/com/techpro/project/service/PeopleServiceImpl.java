package com.techpro.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
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
    // If person exists, return it. Otherwise, create it.
    public Person createPerson(Person person) {
        return peopleRepository
                .findOne(Example.of(person, ExampleMatcher.matching().withIgnoreCase()))
                .orElseGet(() -> peopleRepository.save(person));
    }

    @Override
    public Person updatePerson(Integer id, Person person) {
        if (peopleRepository.findById(id).isPresent()) {
            person.setId(id);
            return peopleRepository.save(person);
        } else {
            return null;
        }
    }

    @Override
    public void deletePersonById(Integer id) {
        peopleRepository.deleteById(id);
    }

}
