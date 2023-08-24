package com.example.fittracker.service;

import com.example.fittracker.exception.ResourceNotFoundException;
import com.example.fittracker.model.*;
import com.example.fittracker.payload.challenge.ChallengeStats;
import com.example.fittracker.repository.ChallengeRepository;
import com.example.fittracker.repository.UserChallengeRepository;
import com.example.fittracker.repository.UserRepository;
import com.example.fittracker.repository.WorkoutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class UserChallengeService {
    @Autowired
    private UserChallengeRepository userChallengeRepository;
    @Autowired
    private ChallengeRepository challengeRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private WorkoutRepository workoutRepository;

    public void joinChallenge(Long userId, Long challengeId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));

        Challenge challenge = challengeRepository.findById(challengeId)
                .orElseThrow(() -> new ResourceNotFoundException("Challenge", "id", challengeId));

        UserChallenge userChallenge = new UserChallenge(user, challenge);
        userChallengeRepository.save(userChallenge);
    }

    @Cacheable("challengeStats")
    public ChallengeStats getChallengeStats(Long userId, Long challengeId) {
//        UserChallenge userChallenge = userChallengeRepository.findById(userId)
//                .orElseThrow(() -> new ResourceNotFoundException("UserChallenge", "id", challengeId));
        UserChallenge userChallenge = userChallengeRepository.findByUser_UserIdAndChallenge_ChallengeId(userId, challengeId)
                .orElseThrow(() -> new ResourceNotFoundException("UserChallenge", "userId and challengeId", userId + " " + challengeId));

        Challenge challenge = userChallenge.getChallenge();
        List<Activity> challengeActivities = challenge.getActivities();

        List<Workout> workouts = workoutRepository.findByUser_UserIdAndDateTimeBetween(
//                userChallenge.getUser().getUserId(),
                userId,
                challenge.getDateStart(),
                challenge.getDateEnd()
        );

        ChallengeStats challengeStats = calculateChallengeStats(workouts, challengeActivities, challenge.getTarget());
        // Save progress in UserChallenge entity
        BigDecimal progress = new BigDecimal(challengeStats.getProgress());
        userChallenge.setProgress(progress);
        userChallengeRepository.save(userChallenge);
        return challengeStats;
    }
    private ChallengeStats calculateChallengeStats(List<Workout> workouts, List<Activity> challengeActivities, BigDecimal target) {
        BigDecimal totalDistance = BigDecimal.ZERO;
        int totalSeconds = 0;
        int caloriesBurned = 0;
        int numWorkouts = 0;

        for (Workout workout : workouts) {
            if (isAllActivitiesCompleted(workout.getActivity(), challengeActivities)) {
                int duration = calculateDuration(workout.getTimeStart(), workout.getTimeEnd());
                totalSeconds += duration;
                totalDistance = totalDistance.add(workout.getDistance());
                caloriesBurned += workout.getCaloriesBurned().intValue();
                numWorkouts++;
            }
        }
        BigDecimal progress = totalDistance.divide(target, 2, RoundingMode.HALF_UP).multiply(BigDecimal.valueOf(100));
        String formattedProgress = progress.setScale(2, RoundingMode.HALF_UP).toString();
        String totalTime = formatDuration(totalSeconds);

        return new ChallengeStats(formattedProgress, totalTime, caloriesBurned, numWorkouts);
    }
    private boolean isAllActivitiesCompleted(Activity workoutActivity, List<Activity> challengeActivities) {
        return checkActivityCompletion(workoutActivity, challengeActivities, 0);
    }

    private boolean checkActivityCompletion(Activity workoutActivity, List<Activity> challengeActivities, int index) {
        // Base case: If we have checked all activities and none match, return false
        if (index >= challengeActivities.size()) {
            return false;
        }

        Activity challengeActivity = challengeActivities.get(index);

        // If the activity IDs match, return true
        if (challengeActivity.getActivityId().equals(workoutActivity.getActivityId())) {
            return true;
        }

        // Recursively check the next activity in the list
        return checkActivityCompletion(workoutActivity, challengeActivities, index + 1);
    }
    private String formatDuration(int totalSeconds) {
        long hours = totalSeconds / 3600;
        long minutes = (totalSeconds % 3600) / 60;
        long seconds = totalSeconds % 60;

        return String.format("%02d:%02d:%02d", hours, minutes, seconds);
    }
    private int calculateDuration(LocalDateTime timeStart, LocalDateTime timeEnd) {
        Duration duration = Duration.between(timeStart, timeEnd);
        return (int) duration.getSeconds();
    }
}
