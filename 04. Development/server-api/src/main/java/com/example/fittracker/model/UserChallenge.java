package com.example.fittracker.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

import java.io.Serializable;

@Data
@Entity
@Table(name = "user_challenges")
@AllArgsConstructor
@NoArgsConstructor

@IdClass(UserChallenge.UserChallengeId.class)
public class UserChallenge {
    @Data
    public static class UserChallengeId implements Serializable {
        private Long user;
        private Long challenge;
    }

    @Id
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Id
    @ManyToOne
    @JoinColumn(name = "challenge_id")
    private Challenge challenge;

    @DecimalMin("0.00")
    @DecimalMax("100")
    private BigDecimal progress;

    public UserChallenge(User user, Challenge challenge) {
        this.user = user;
        this.challenge = challenge;
    }
}
