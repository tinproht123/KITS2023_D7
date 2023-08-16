package com.example.fittracker.service;

import com.example.fittracker.exception.ResourceNotFoundException;
import com.example.fittracker.exception.UserDataNotPairingException;
import com.example.fittracker.model.Workout;
import com.example.fittracker.repository.WorkoutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class WorkoutService {
    @Autowired
    private WorkoutRepository workoutRepository;
    public List<Workout> getAllWorkouts() {
        return workoutRepository.findAll();
    }

    public Workout saveWorkout(Workout workout) {
        return workoutRepository.save(workout);
    }

    public Workout getWorkoutById(Long id) {
        return workoutRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", id));
    }

    public Workout updateWorkout(Long id, Workout workoutDetails) {
        Workout workout = getWorkoutById(id);
        workout.setName(workoutDetails.getName());
        workout.setTimeStart(workoutDetails.getTimeStart());
        workout.setTimeEnd(workoutDetails.getTimeEnd());
        workout.setDistance(workoutDetails.getDistance());
        workout.setPace(workoutDetails.getPace());
        workout.setNote(workoutDetails.getNote());
        workout.setCaloriesBurned(workoutDetails.getCaloriesBurned());
        return workoutRepository.save(workout);
    }

    public void deleteWorkout(Long id) {
        Workout workout = workoutRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", id));
        workoutRepository.delete(workout);
    }

    public List<Workout> getWorkoutsByUserId(Long userId) {
        return workoutRepository.findAllByUser_UserId(userId);
    }

    public List<Workout> getAllWorkoutsByMonthAndYear(int year, int month) {
        LocalDate startDate = LocalDate.of(year, month, 1);
        LocalDate endDate = startDate.withDayOfMonth(startDate.lengthOfMonth());

        return workoutRepository.findWorkoutsByTimeRange(startDate.atStartOfDay(), endDate.atTime(LocalTime.MAX));
    }
}
