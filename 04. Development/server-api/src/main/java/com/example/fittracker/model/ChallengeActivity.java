package com.example.fittracker.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "challenge_activities")
@AllArgsConstructor
@NoArgsConstructor
public class ChallengeActivity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long challengeActivityId;

    @ManyToOne
    @JoinColumn(name = "challenge_id")
    private Challenge challenge;

    @ManyToOne
    @JoinColumn(name = "activity_id")
    private Activity activity;
}
