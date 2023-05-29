package com.techpro.project.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;

@Entity
@Table(name = "people")
public class people {

    @Id
    @GeneratedValue
    private int PersonID;
    @Column(nullable = false)
    private String FirstName;

    public people() {
    }

    public people(String name) {
        this.FirstName = name;
    }

    public people(int id, String name) {
        this.PersonID = id;
        this.FirstName = name;
    }

    public int getId() {
        return PersonID;
    }

    public void setId(int id) {
        this.PersonID = id;
    }

    public String getName() {
        return FirstName;
    }

    public void setName(String name) {
        this.FirstName = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        people people = (people) o;

        return FirstName.equals(people.FirstName);
    }

    @Override
    public int hashCode() {
        return FirstName.hashCode();
    }
}
