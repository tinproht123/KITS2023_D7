package com.example.library.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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
    private Long id_challenge;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private LocalDateTime date_start;

    @Column(nullable = false)
    private LocalDateTime date_end;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false, columnDefinition = "TEXT")
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
