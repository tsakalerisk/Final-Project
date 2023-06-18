package com.techpro.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.techpro.project.entity.Item;

@Service
public interface ItemService {
    public List<Item> getItems();
    public Optional<Item> getItemById(Integer id);
    public Item createItem(Item item);
    public void deleteItemById(Integer id);
}
