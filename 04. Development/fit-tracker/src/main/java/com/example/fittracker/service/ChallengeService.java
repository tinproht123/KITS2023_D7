package com.example.fittracker.service;

import com.example.fittracker.exception.ResourceNotFoundException;
import com.example.fittracker.model.Challenge;
import com.example.fittracker.repository.ChallengeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChallengeService {
    @Autowired
    private ChallengeRepository challengeRepository;
    public List<Challenge> getAllChallenges() {
        return challengeRepository.findAll();
    }

    public Challenge saveChallenge(Challenge challenge) {
        return challengeRepository.save(challenge);
    }

    public Challenge getChallengeById(Long id) {
        return challengeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", id));
    }

    public Challenge updateChallenge(Long id, Challenge challengeDetails) {
        Challenge challenge = getChallengeById(id);
        challenge.setName(challengeDetails.getName());
        challenge.setDateStart(challengeDetails.getDateStart());
        challenge.setDateEnd(challengeDetails.getDateEnd());
        challenge.setDescription(challengeDetails.getDescription());
        challenge.setRule(challengeDetails.getRule());
        challenge.setPrize(challengeDetails.getPrize());
        challenge.setTarget(challengeDetails.getTarget());
        return challengeRepository.save(challenge);
    }

    public void deleteChallenge(Long id) {
        Challenge challenge = challengeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", id));
        challengeRepository.delete(challenge);
    }
}
