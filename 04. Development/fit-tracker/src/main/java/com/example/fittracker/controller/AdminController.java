package com.example.fittracker.controller;

import com.example.fittracker.model.Activity;
import com.example.fittracker.model.Challenge;
import com.example.fittracker.service.ActivityService;
import com.example.fittracker.service.ChallengeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
    @Autowired
    private ActivityService activityService;
    @Autowired
    private ChallengeService challengeService;

    // activity
    @GetMapping("/activity")
    public ResponseEntity<List<Activity>> getAllActivities() {
        List<Activity> activities = activityService.getAllActivities();
        return new ResponseEntity<>(activities, HttpStatus.OK);
    }
    @PostMapping("/activity")
    public ResponseEntity<Activity> createActivity(@RequestBody Activity activity) {
        Activity savedActivity = activityService.saveActivity(activity);
        return new ResponseEntity<>(savedActivity, HttpStatus.CREATED);
    }
    @GetMapping("/activity/{id}")
    public ResponseEntity<Activity> getActivityById(@PathVariable Long id) {
        Activity activity = activityService.getActivityById(id);
        return new ResponseEntity<>(activity, HttpStatus.OK);
    }
    @PutMapping("/activity/{id}")
    public ResponseEntity<Activity> updateActivity(@PathVariable Long id, @RequestBody Activity activityDetails) {
        Activity updatedActivity = activityService.updateActivity(id, activityDetails);
        return new ResponseEntity<>(updatedActivity, HttpStatus.OK);
    }
    @DeleteMapping("/activity/{id}")
    public ResponseEntity<HttpStatus> deleteActivity(@PathVariable Long id) {
        activityService.deleteActivity(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // challenge
    @GetMapping("/challenge")
    public ResponseEntity<List<Challenge>> getAllChallenges() {
        List<Challenge> challenges = challengeService.getAllChallenges();
        return new ResponseEntity<>(challenges, HttpStatus.OK);
    }
    @PostMapping("/challenge")
    public ResponseEntity<Challenge> createChallenge(@RequestBody Challenge challenge) {
        Challenge savedChallenge = challengeService.saveChallenge(challenge);
        return new ResponseEntity<>(savedChallenge, HttpStatus.CREATED);
    }
    @GetMapping("/challenge/{id}")
    public ResponseEntity<Challenge> getChallengeById(@PathVariable Long id) {
        Challenge challenge = challengeService.getChallengeById(id);
        return new ResponseEntity<>(challenge, HttpStatus.OK);
    }
    @PutMapping("/challenge/{id}")
    public ResponseEntity<Challenge> updateChallenge(@PathVariable Long id, @RequestBody Challenge challengeDetails) {
        Challenge updatedChallenge = challengeService.updateChallenge(id, challengeDetails);
        return new ResponseEntity<>(updatedChallenge, HttpStatus.OK);
    }
    @DeleteMapping("/challenge/{id}")
    public ResponseEntity<HttpStatus> deleteChallenge(@PathVariable Long id) {
        challengeService.deleteChallenge(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
