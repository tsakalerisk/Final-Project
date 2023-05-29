package com.techpro.project.controllers;

import java.util.ArrayList;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techpro.project.entity.people;


@RestController
public class PeopleController {


    @GetMapping(value = "/test_controller", produces = "application/json")

    public ResponseEntity<?> test_controller()
    {
        ArrayList<people> responses=new ArrayList<>();
        people response = new people();
        response.setId(0);
        responses.add(response);
        System.out.println("test from the people controller");
        return new ResponseEntity<>(responses,HttpStatus.OK);
    }



}
