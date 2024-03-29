package com.techpro.project.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.util.UriComponentsBuilder;

import com.techpro.project.entity.Person;
import com.techpro.project.service.PeopleServiceImpl;

import io.swagger.v3.oas.annotations.Operation;

@RestController
@CrossOrigin
@RequestMapping("/people")
public class PeopleController {
    @Autowired
    private PeopleServiceImpl peopleService;

    @Operation(summary = "Get all people")
    @GetMapping
    public ResponseEntity<List<Person>> getPeople() {
        return ResponseEntity.ok().body(peopleService.getPeople());
    }

    @Operation(summary = "Get person by id")
    @GetMapping("/{id}")
    public ResponseEntity<Person> getPersonById(@PathVariable Integer id) {
        return ResponseEntity.ok().body(
                peopleService.getPersonById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND)));
    }

    @Operation(summary = "Create person")
    @PostMapping
    public ResponseEntity<Person> createPerson(Person person, UriComponentsBuilder ucb) {
        Person savedPerson = peopleService.createPerson(person);
        URI location = ucb.path("/people/{id}").buildAndExpand(savedPerson.getId()).toUri();
        return ResponseEntity.created(location).body(savedPerson);
    }

    @Operation(summary = "Update person by id")
    @PutMapping("/{id}")
    public ResponseEntity<Person> updatePerson(@PathVariable Integer id, Person person) {
        Person updatedPerson = peopleService.updatePerson(id, person);
        if (updatedPerson == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(updatedPerson);
    }

    @Operation(summary = "Delete person by id")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePersonById(@PathVariable Integer id) {
        if (!peopleService.getPersonById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        peopleService.deletePersonById(id);
        return ResponseEntity.noContent().build();
    }
}
