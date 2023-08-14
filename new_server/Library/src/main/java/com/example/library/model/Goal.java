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
@Table(name = "goals")
@AllArgsConstructor
@NoArgsConstructor
public class Goal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_goal;

    @Column(nullable = false)
    private LocalDateTime time_start;

    @Column(nullable = false)
    private LocalDateTime time_end;

    @Column(nullable = false)
    private String type;

    @Column
    private String description;

    @Column(nullable = false)
    private int target;

    @Column(nullable = false)
    @DecimalMin("0.00")
    private BigDecimal current_complete;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "id_user")
    //@JsonIgnoreProperties(value = {"applications", "hibernateLazyInitializer"})
    private User user;
}
