package com.example.fittracker.repository;

import com.example.fittracker.model.Workout;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

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

}
