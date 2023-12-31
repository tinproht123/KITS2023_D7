package com.example.fittracker.controller;

import com.example.fittracker.model.Achievement;
import com.example.fittracker.model.Activity;
import com.example.fittracker.model.Challenge;
import com.example.fittracker.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/admin")
public class AdminController {
    @Autowired
    private ActivityService activityService;
    @Autowired
    private ChallengeService challengeService;
    @Autowired
    private AchievementService achievementService;
    @Autowired
    private ChallengeActivityService challengeActivityService;
    @Autowired
    private ImageService imageService;

    // activity
    @GetMapping("/activities")
    public ResponseEntity<List<Activity>> getAllActivities() {
        List<Activity> activities = activityService.getAllActivities();
        return new ResponseEntity<>(activities, HttpStatus.OK);
    }

    @PostMapping("/activities")
    public ResponseEntity<Activity> createActivity(@RequestBody Activity activity) {
        Activity savedActivity = activityService.saveActivity(activity);
        return new ResponseEntity<>(savedActivity, HttpStatus.CREATED);

    }
    @GetMapping("/activities/{id}")
    public ResponseEntity<Activity> getActivityById(@PathVariable Long id) {
        Activity activity = activityService.getActivityById(id);
        return new ResponseEntity<>(activity, HttpStatus.OK);
    }
    @PutMapping("/activities/{id}")
    public ResponseEntity<Activity> updateActivity(@PathVariable Long id, @RequestBody Activity activityDetails) {
        Activity updatedActivity = activityService.updateActivity(id, activityDetails);
        return new ResponseEntity<>(updatedActivity, HttpStatus.OK);
    }
    @DeleteMapping("/activities/{id}")
    public ResponseEntity<HttpStatus> deleteActivity(@PathVariable Long id) {
        activityService.deleteActivity(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // challenge
    @GetMapping("/challenges")
    public ResponseEntity<List<Challenge>> getAllChallenges() {
        List<Challenge> challenges = challengeService.getAllChallenges();
        return new ResponseEntity<>(challenges, HttpStatus.OK);
    }
    @PostMapping("/challenges")
    public ResponseEntity<Challenge> createChallenge(@RequestBody Challenge challenge) {
        Challenge savedChallenge = challengeService.saveChallenge(challenge);
        return new ResponseEntity<>(savedChallenge, HttpStatus.CREATED);
    }
    @GetMapping("/challenges/{id}")
    public ResponseEntity<Challenge> getChallengeById(@PathVariable Long id) {
        Challenge challenge = challengeService.getChallengeById(id);
        return new ResponseEntity<>(challenge, HttpStatus.OK);
    }
    @PutMapping("/challenges/{id}")
    public ResponseEntity<Challenge> updateChallenge(@PathVariable Long id, @RequestBody Challenge challengeDetails) {
        Challenge updatedChallenge = challengeService.updateChallenge(id, challengeDetails);
        return new ResponseEntity<>(updatedChallenge, HttpStatus.OK);
    }
    @DeleteMapping("/challenges/{id}")
    public ResponseEntity<HttpStatus> deleteChallenge(@PathVariable Long id) {
        challengeService.deleteChallenge(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @PostMapping("/challenge/{challenge_id}/{activity_id}")
    public ResponseEntity<?> createChallengeActivity(@PathVariable("challenge_id") Long challengeId, @PathVariable("activity_id") Long activityId) {
        challengeActivityService.createChallengeActivity(challengeId, activityId);
        return ResponseEntity.ok().build();
    }

    // achievement

    @GetMapping("/achievements")
    public ResponseEntity<List<Achievement>> getAllAchievements() {
        List<Achievement> achievements = achievementService.getAllAchievements();
        return new ResponseEntity<>(achievements, HttpStatus.OK);
    }
    @PostMapping("/achievements")
    public ResponseEntity<Achievement> createAchievement(@RequestBody Achievement achievement) {
        Achievement savedAchievement = achievementService.saveAchievement(achievement);
        return new ResponseEntity<>(savedAchievement, HttpStatus.CREATED);
    }
    @GetMapping("/achievements/{id}")
    public ResponseEntity<Achievement> getAchievementById(@PathVariable Long id) {
        Achievement achievement = achievementService.getAchievementById(id);
        return new ResponseEntity<>(achievement, HttpStatus.OK);
    }
    @PutMapping("/achievements/{id}")
    public ResponseEntity<Achievement> updateAchievement(@PathVariable Long id, @RequestBody Achievement achievementDetails) {
        Achievement updatedAchievement = achievementService.updateAchievement(id, achievementDetails);
        return new ResponseEntity<>(updatedAchievement, HttpStatus.OK);
    }
    @DeleteMapping("/achievements/{id}")
    public ResponseEntity<HttpStatus> deleteAchievement(@PathVariable Long id) {
        achievementService.deleteAchievement(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
