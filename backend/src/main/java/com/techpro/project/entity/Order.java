package com.techpro.project.entity;

import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "orders")
@Data
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "OrderID")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "PersonID")
    private Person person;

    @OneToMany // (mappedBy = "order")
    @JoinColumn(name = "OrderID")
    @JsonIgnoreProperties("order")
    private List<OrderDetail> orderDetails;

    @Column(name = "OrderDate")
    private LocalDateTime dateTime;
}
