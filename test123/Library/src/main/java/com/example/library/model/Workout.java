package com.example.library.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "workouts")
@AllArgsConstructor
@NoArgsConstructor
public class Workout {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_workout;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private LocalDateTime time_start;

    @Column(nullable = false)
    private LocalDateTime time_end;

    @Column(nullable = false)
    private int distance;

    @Column(nullable = false)
    @DecimalMin("0.00")
    private BigDecimal pace;

    @Column
    private String note;

    @Column(nullable = false)
    @DecimalMin("0.00")
    private BigDecimal calories_burned;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "id_user")
    //@JsonIgnoreProperties(value = {"applications", "hibernateLazyInitializer"})
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "activity_id", referencedColumnName = "id_activity")
    //@JsonIgnoreProperties(value = {"applications", "hibernateLazyInitializer"})
    private Activity activity;
}
