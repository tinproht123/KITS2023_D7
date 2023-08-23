package com.example.fittracker.service;

import com.example.fittracker.exception.ResourceNotFoundException;
import com.example.fittracker.model.Activity;
import com.example.fittracker.payload.response.MessageResponse;
import com.example.fittracker.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
public class ActivityService {
    @Autowired
    private ActivityRepository activityRepository;
    public List<Activity> getAllActivities() {
        return activityRepository.findAll();
    }

    public Activity saveActivity(Activity activity) {
        return activityRepository.save(activity);
    }

    public Activity getActivityById(Long id) {
        return activityRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", id));
    }

    public Activity updateActivity(Long id, Activity activityDetails) {
        Activity activity = getActivityById(id);
        activity.setName(activityDetails.getName());
        activity.setMET(activityDetails.getMET());
        activity.setType(activityDetails.getType());
        activity.setImage(activityDetails.getImage());
        return activityRepository.save(activity);
    }

    public void deleteActivity(Long id) {
        Activity activity = activityRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", id));
        activityRepository.delete(activity);
    }

    public ResponseEntity<?> createActivity(BigDecimal met, String imageURl, String name, String type) {
        Optional<Activity> activity = activityRepository.findActivityByName(name);
        if (activity.isPresent()) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Activity's name is already taken!"));

        } else {
            Activity activities = new Activity();
            activities.setMET(met);
            activities.setImage(imageURl);
            activities.setName(name);
            activities.setType(type);
            activityRepository.save(activities);
            return ResponseEntity.ok(new MessageResponse("Created Activity Successfully"));
        }
    }
}
