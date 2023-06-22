package com.techpro.project.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "order_details")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "OrderDetailsID")
    private Integer id;

    @ManyToOne()
    @JoinColumn(name = "OrderID")
    @JsonIgnoreProperties("orderDetails")
    private Order order;

    @ManyToOne
    @JoinColumn(name = "ItemID")
    private Item item;

    @Column(name = "Quantity")
    private Integer quantity;
}
