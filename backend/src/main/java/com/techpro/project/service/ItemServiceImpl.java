package com.techpro.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.techpro.project.entity.Item;
import com.techpro.project.repository.ItemsRepository;

@Component
public class ItemServiceImpl implements ItemService {
    @Autowired
    private ItemsRepository itemsRepository;

    @Override
    public List<Item> getItems() {
        return itemsRepository.findAll();
    }

    @Override
    public Optional<Item> getItemById(Integer id) {
        return itemsRepository.findById(id);
    }

    @Override
    public Item createItem(Item item) {
        return itemsRepository.save(item);
    }

    @Override
    public Item updateItem(Integer id, Item item) {
        if (itemsRepository.findById(id).isPresent()) {
            item.setId(id);
            return itemsRepository.save(item);
        } else {
            return null;
        }
    }

    @Override
    public void deleteItemById(Integer id) {
        itemsRepository.deleteById(id);
    }
    
}
