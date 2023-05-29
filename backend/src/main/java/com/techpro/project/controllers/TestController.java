package com.techpro.project.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @GetMapping("/")
    public String greet(@RequestParam(value = "name", defaultValue = "World") String name) {
        return "Hello " + name;
    }
}
