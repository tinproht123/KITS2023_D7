package com.example.fittracker.service;

import com.example.fittracker.model.ChallengeActivity;
import com.example.fittracker.repository.ChallengeActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChallengeActivityService {
    @Autowired
    private ChallengeActivityRepository challengeActivityRepository;

    public void createChallengeActivity(Long challengeId, Long activityId) {
        ChallengeActivity challengeActivity = new ChallengeActivity();
        challengeActivityRepository.save(challengeActivity);
    }
}
