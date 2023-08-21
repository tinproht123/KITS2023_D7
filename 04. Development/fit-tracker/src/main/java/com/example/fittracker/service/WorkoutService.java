package com.example.fittracker.service;

import com.example.fittracker.exception.ResourceNotFoundException;
import com.example.fittracker.exception.UserDataNotPairingException;
import com.example.fittracker.model.Activity;
import com.example.fittracker.model.User;
import com.example.fittracker.model.Workout;
import com.example.fittracker.payload.workout.CreateWorkoutRequest;
import com.example.fittracker.repository.ActivityRepository;
import com.example.fittracker.repository.UserRepository;
import com.example.fittracker.repository.WorkoutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@Service
public class WorkoutService {
    @Autowired
    private WorkoutRepository workoutRepository;
    @Autowired
    private ActivityRepository activityRepository;
    @Autowired
    private UserRepository userRepository;
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

    public Workout createWorkout(CreateWorkoutRequest request) {
        Workout workout = new Workout();
        workout.setName(request.getName());
        workout.setDateTime(request.getDateTime());
        workout.setDistance(request.getDistance());
        workout.setNote(request.getNote());
        workout.setTimeStart(request.getTimeStart());
        workout.setTimeEnd(request.getTimeEnd());

        Activity activity = activityRepository.findById(request.getActivityId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid activity ID"));

        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid user ID"));

        workout.setActivity(activity);
        workout.setUser(user);

        calculateCaloriesBurned(workout);
        calculatePace(workout);
        return workoutRepository.save(workout);
    }

    private void calculateCaloriesBurned(Workout workout) {
        BigDecimal met = workout.getActivity().getMET();
        BigDecimal weight = workout.getUser().getWeight();
        long duration = calculateDurationInHours(workout.getTimeStart(), workout.getTimeEnd());

        BigDecimal caloriesBurned = met.multiply(weight).multiply(BigDecimal.valueOf(duration));
        workout.setCaloriesBurned(caloriesBurned);
    }

    private void calculatePace(Workout workout) {
        long duration = calculateDurationInSeconds(workout.getTimeStart(), workout.getTimeEnd());
        BigDecimal distance = workout.getDistance();

        // Calculate pace in seconds per kilometer
        BigDecimal paceInSecondsPerKm = BigDecimal.valueOf(duration).divide(distance, 2, RoundingMode.HALF_UP);

        workout.setPace(paceInSecondsPerKm);
    }

    private long calculateDurationInHours(LocalDateTime start, LocalDateTime end) {
        return Duration.between(start, end).toHours();
    }

    private long calculateDurationInSeconds(LocalDateTime start, LocalDateTime end) {
        return Duration.between(start, end).toSeconds();
    }

    public long countWorkoutsByUser_UserIdAndDate(Long userId, LocalDate date) {
        LocalDateTime startOfDay = date.atStartOfDay();
        LocalDateTime endOfDay = date.atTime(LocalTime.MAX);
        return workoutRepository.countWorkoutsByUser_UserIdAndDateTimeBetween(userId, startOfDay, endOfDay);
    }

    public BigDecimal sumCaloriesBurnedByUser_UserIdAndDate(Long userId, LocalDate date) {
        LocalDateTime startOfDay = date.atStartOfDay();
        LocalDateTime endOfDay = date.atTime(LocalTime.MAX);
        return workoutRepository.sumCaloriesBurnedByUser_UserIdAndDateTimeBetween(userId, startOfDay, endOfDay);
    }

    public BigDecimal sumDistanceByUser_UserIdAndDate(Long userId, LocalDate date) {
        LocalDateTime startOfDay = date.atStartOfDay();
        LocalDateTime endOfDay = date.atTime(LocalTime.MAX);
        return workoutRepository.sumDistanceByUser_UserIdAndDateTimeBetween(userId, startOfDay, endOfDay);
    }

    public List<Workout> getWorkoutsByUserIdAndDate(Long userId, LocalDate date) {
        LocalDateTime startOfDay = date.atStartOfDay();
        LocalDateTime endOfDay = date.atTime(LocalTime.MAX);
        return workoutRepository.findByUser_UserIdAndDateTime(userId, startOfDay, endOfDay);
    }

    public long countWorkoutsByUser_UserId(Long userId) {
        return workoutRepository.countWorkoutsByUser_UserId(userId);
    }

    public BigDecimal sumCaloriesBurnedByUser_UserId(Long userId) {
        return workoutRepository.sumCaloriesBurnedByUser_UserId(userId);
    }

    public BigDecimal sumDistanceByUser_UserId(Long userId) {
        return workoutRepository.sumDistanceByUser_UserId(userId);
    }

    public String calculateTotalTimeByUserId(Long userId) {
        List<Workout> workouts = workoutRepository.findByUser_UserId(userId);
        Duration totalTime = Duration.ZERO;
        for (Workout workout : workouts) {
            LocalDateTime startDateTime = workout.getTimeStart();
            LocalDateTime endDateTime = workout.getTimeEnd();
            Duration workoutDuration = Duration.between(startDateTime, endDateTime);
            totalTime = totalTime.plus(workoutDuration);
        }
        long totalSeconds = totalTime.getSeconds();
        long hours = totalSeconds / 3600;
        long minutes = (totalSeconds % 3600) / 60;
        long seconds = totalSeconds % 60;
        return String.format("%02d:%02d:%02d", hours, minutes, seconds);
    }

    public String calculateTotalTimeByUser_UserIdAndDate(Long userId, LocalDate date) {
        LocalDateTime startDateTime = date.atStartOfDay();
        LocalDateTime endDateTime = date.atTime(LocalTime.MAX);
        BigDecimal totalSeconds = workoutRepository.calculateTotalTimeByUser_UserIdAndDateTimeBetween(userId, startDateTime, endDateTime);
        long hours = totalSeconds.longValue() / 3600;
        long minutes = (totalSeconds.longValue() % 3600) / 60;
        long seconds = totalSeconds.longValue() % 60;
        return String.format("%02d:%02d:%02d", hours, minutes, seconds);
    }
}
