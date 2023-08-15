package com.example.fittracker.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "goals")
@AllArgsConstructor
@NoArgsConstructor
public class Goal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long goalId;

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime timeStart;

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime timeEnd;

    @Column(nullable = false)
    private String type;

    @Column
    private String description;

    @Column(nullable = false)
    private int target;

    @Column(nullable = false)
    @DecimalMin("0.00")
    private BigDecimal currentComplete;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL,optional = false)
    @JoinColumn(name = "user_id")
    //@JsonIgnoreProperties(value = {"applications", "hibernateLazyInitializer"})
    private User user;
}
