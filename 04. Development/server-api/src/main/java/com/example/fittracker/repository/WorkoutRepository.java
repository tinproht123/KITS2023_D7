package com.example.fittracker.repository;

import com.example.fittracker.model.Workout;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface WorkoutRepository extends JpaRepository<Workout, Long> {
    List<Workout> findAllByUser_UserId(Long userId);
    @Query("SELECT w FROM Workout w " +
            "WHERE w.timeStart >= :startTime AND w.timeEnd <= :endTime")
    List<Workout> findWorkoutsByTimeRange(@Param("startTime") LocalDateTime startTime,
                                          @Param("endTime") LocalDateTime endTime);

    long countWorkoutsByUser_UserIdAndDateTimeBetween(Long userId, LocalDateTime startOfDay, LocalDateTime endOfDay);

    @Query("SELECT SUM(w.caloriesBurned) FROM Workout w WHERE w.user.userId = :userId AND w.dateTime BETWEEN :startDateTime AND :endDateTime")
    BigDecimal sumCaloriesBurnedByUser_UserIdAndDateTimeBetween(
            @Param("userId") Long userId,
            @Param("startDateTime") LocalDateTime startDateTime,
            @Param("endDateTime") LocalDateTime endDateTime
    );

    @Query("SELECT SUM(w.distance) FROM Workout w WHERE w.user.userId = :userId AND w.dateTime BETWEEN :startDateTime AND :endDateTime")
    BigDecimal sumDistanceByUser_UserIdAndDateTimeBetween(
            @Param("userId") Long userId,
            @Param("startDateTime") LocalDateTime startDateTime,
            @Param("endDateTime") LocalDateTime endDateTime
    );
    // goal and workout
    List<Workout> findByUser_UserIdAndDateTimeBetween(Long userId, LocalDateTime startTime, LocalDateTime endTime);

    @Query("SELECT COUNT(w) FROM Workout w WHERE w.user.userId = :userId AND w.activity.activityId = :activityId AND w.timeStart >= :timeStart AND w.timeEnd <= :timeEnd")
    int countByUserIdAndActivityIdAndTimeRange(@Param("userId") Long userId, @Param("activityId") Long activityId, @Param("timeStart") LocalDateTime timeStart, @Param("timeEnd") LocalDateTime timeEnd);

    @Query("SELECT SUM(w.distance) FROM Workout w WHERE w.user.userId = :userId AND w.activity.activityId = :activityId AND w.timeStart >= :timeStart AND w.timeEnd <= :timeEnd")
    BigDecimal sumDistanceByUserIdAndActivityIdAndTimeRange(@Param("userId") Long userId, @Param("activityId") Long activityId, @Param("timeStart") LocalDateTime timeStart, @Param("timeEnd") LocalDateTime timeEnd);
    @Query("SELECT w FROM Workout w WHERE w.user.userId = :userId AND w.timeStart >= :timeStart AND w.timeEnd <= :timeEnd")
    List<Workout> findByUser_UserIdAndDateTime(@Param("userId") Long userId, @Param("timeStart") LocalDateTime timeStart, @Param("timeEnd") LocalDateTime timeEnd);

    long countWorkoutsByUser_UserId(Long userId);
    @Query("SELECT SUM(w.caloriesBurned) FROM Workout w WHERE w.user.userId = :userId")
    BigDecimal sumCaloriesBurnedByUser_UserId(@Param("userId") Long userId);
    @Query("SELECT SUM(w.distance) FROM Workout w WHERE w.user.userId = :userId")
    BigDecimal sumDistanceByUser_UserId(@Param("userId") Long userId);

    List<Workout> findByUser_UserId(Long userId);
    @Query("SELECT COALESCE(SUM(TIME_TO_SEC(TIMEDIFF(w.timeEnd, w.timeStart))), 0) FROM Workout w WHERE w.user.userId = :userId AND w.dateTime BETWEEN :startDateTime AND :endDateTime")
    BigDecimal calculateTotalTimeByUser_UserIdAndDateTimeBetween(
            @Param("userId") Long userId,
            @Param("startDateTime") LocalDateTime startDateTime,
            @Param("endDateTime") LocalDateTime endDateTime
    );
}

