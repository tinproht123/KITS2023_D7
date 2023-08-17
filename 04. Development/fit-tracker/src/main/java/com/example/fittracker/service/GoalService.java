package com.example.fittracker.service;

import com.example.fittracker.exception.ResourceNotFoundException;
import com.example.fittracker.model.Goal;
import com.example.fittracker.model.Workout;
import com.example.fittracker.repository.GoalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GoalService {
    @Autowired
    private GoalRepository goalRepository;
    public List<Goal> getAllGoals() {
        return goalRepository.findAll();
    }

    public Goal saveGoal(Goal goal) {
        return goalRepository.save(goal);
    }

    public Goal getGoalById(Long id) {
        return goalRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", id));
    }

    public void deleteGoal(Long id) {
        Goal goal = goalRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", id));
        goalRepository.delete(goal);
    }

    public List<Goal> getGoalsByUserId(Long userId) {
        return goalRepository.findAllByUser_UserId(userId);
    }
}
