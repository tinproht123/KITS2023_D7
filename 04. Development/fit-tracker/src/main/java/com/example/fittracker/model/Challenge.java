package com.example.fittracker.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Table(name = "challenges")
@AllArgsConstructor
@NoArgsConstructor
public class Challenge {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long challengeId;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime dateStart;

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime dateEnd;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String rule;

    @Column(nullable = false)
    private String prize;

    @Column(nullable = false)
    private int target;

    @Column(nullable = false)
    @DecimalMin("0.00")
    @DecimalMax("100")
    private BigDecimal progress;

    @ManyToMany(mappedBy = "challenges")
    private List<User> users;
}
