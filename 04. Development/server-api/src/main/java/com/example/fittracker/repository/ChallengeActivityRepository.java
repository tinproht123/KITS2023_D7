package com.example.fittracker.repository;

import com.example.fittracker.model.ChallengeActivity;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChallengeActivityRepository extends JpaRepository<ChallengeActivity, Long> {

}
