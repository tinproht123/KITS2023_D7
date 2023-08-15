package com.example.fittracker.service;

import com.example.fittracker.exception.ResourceNotFoundException;
import com.example.fittracker.model.User;
import com.example.fittracker.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", id));
    }

    public User updateUser(Long id, User userDetails) {
        User user = getUserById(id);
        user.setFirstName(userDetails.getFirstName());
        user.setLastName(userDetails.getLastName());
        user.setUsername(userDetails.getUsername());
        user.setPassword(userDetails.getPassword());
        user.setEmail(userDetails.getEmail());
        user.setGender(userDetails.getGender());
        user.setBirthday(userDetails.getBirthday());
        user.setCity(userDetails.getCity());
        user.setCountry(userDetails.getCountry());
        user.setWeight(userDetails.getWeight());
        user.setHeight(userDetails.getHeight());
        user.setImage(userDetails.getImage());
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", id));
        userRepository.delete(user);
    }
}
