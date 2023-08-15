package com.example.fittracker.service;

import com.example.fittracker.exception.ResourceNotFoundException;
import com.example.fittracker.model.Activity;
import com.example.fittracker.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
