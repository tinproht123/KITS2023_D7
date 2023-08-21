package com.example.fittracker.service;

import com.example.fittracker.model.UserChallenge;
import com.example.fittracker.repository.ChallengeRepository;
import com.example.fittracker.repository.UserChallengeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserChallengeService {
    @Autowired
    private UserChallengeRepository userChallengeRepository;
    @Autowired
    private ChallengeRepository challengeRepository;
//    public UserChallenge saveUserChallenge(Long challengeId, Long userId) {
//        UserChallenge userChallenge = new UserChallenge();
//        userChallenge.setChallenge(challengeRepository.findById(challengeId));
//    }
}
