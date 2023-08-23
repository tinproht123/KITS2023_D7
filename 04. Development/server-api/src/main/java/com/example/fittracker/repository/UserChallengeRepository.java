package com.example.fittracker.repository;

import com.example.fittracker.model.UserChallenge;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserChallengeRepository extends JpaRepository<UserChallenge, Long> {
    Optional<UserChallenge> findByUser_UserIdAndChallenge_ChallengeId(Long userId, Long challengeId);
}
