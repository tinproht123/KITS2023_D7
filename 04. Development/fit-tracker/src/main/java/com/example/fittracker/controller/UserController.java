package com.example.fittracker.controller;

import com.example.fittracker.model.*;
import com.example.fittracker.payload.workout.CreateWorkoutRequest;
import com.example.fittracker.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "*", maxAge = 3600)
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private ReportService reportService;
    @Autowired
    private GoalService goalService;
    @Autowired
    private WorkoutService workoutService;
    @Autowired
    private ChallengeService challengeService;

    // user

        @GetMapping("/user")
        public ResponseEntity<List<User>> getAllUsers() {
            List<User> users = userService.getAllUsers();
            return new ResponseEntity<>(users, HttpStatus.OK);
        }
        @PostMapping("/user")
        public ResponseEntity<User> createUser(@RequestBody User user) {
            User savedUser = userService.saveUser(user);
            return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
        }
        @GetMapping("/user/{id}")
        public ResponseEntity<User> getUserById(@PathVariable Long id) {
            User user = userService.getUserById(id);
            return new ResponseEntity<>(user, HttpStatus.OK);
        }
        @PutMapping("/user/{id}")
        public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
            User updatedUser = userService.updateUser(id, userDetails);
            return new ResponseEntity<>(updatedUser, HttpStatus.OK);
        }
        @DeleteMapping("/user/{id}")
        public ResponseEntity<HttpStatus> deleteUser(@PathVariable Long id) {
            userService.deleteUser(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

    // goal

    @GetMapping("/goal")
    public ResponseEntity<List<Goal>> getAllGoals() {

        List<Goal> goals = goalService.getAllGoals();
        return new ResponseEntity<>(goals, HttpStatus.OK);
    }
        @PostMapping("/goal")
        public ResponseEntity<Goal> createGoal(@RequestBody Goal goal) {
            Goal savedGoal = goalService.saveGoal(goal);
            return new ResponseEntity<>(savedGoal, HttpStatus.CREATED);
        }
        @GetMapping("/goal/{id}")
        public ResponseEntity<Goal> getGoalById(@PathVariable Long id) {
            Goal goal = goalService.getGoalById(id);
            return new ResponseEntity<>(goal, HttpStatus.OK);
        }
        @DeleteMapping("/goal/{id}")
        public ResponseEntity<HttpStatus> deleteGoal(@PathVariable Long id) {
            goalService.deleteGoal(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        // advanced goal
        @GetMapping("/goal/user/{userId}")
        public ResponseEntity<List<Goal>> getGoalsByUserId(@PathVariable("userId") Long userId) {
            List<Goal> goals = goalService.getGoalsByUserId(userId);
            return ResponseEntity.ok(goals);
        }

    // workout

        @GetMapping("/workout")
        public ResponseEntity<List<Workout>> getAllWorkouts() {
            List<Workout> workouts = workoutService.getAllWorkouts();
            return new ResponseEntity<>(workouts, HttpStatus.OK);
        }
//        @PostMapping("/workout")
//        public ResponseEntity<Workout> createWorkout(@RequestBody Workout workout) {
//            Workout savedWorkout = workoutService.saveWorkout(workout);
//            return new ResponseEntity<>(savedWorkout, HttpStatus.CREATED);
//        }
        @PostMapping("/workout")
        public ResponseEntity<Workout> createWorkout(@RequestBody CreateWorkoutRequest request) {
            Workout workout = workoutService.createWorkout(request);
            return ResponseEntity.status(HttpStatus.CREATED).body(workout);
        }
        @GetMapping("/workout/{id}")
        public ResponseEntity<Workout> getWorkoutById(@PathVariable Long id) {
            Workout workout = workoutService.getWorkoutById(id);
            return new ResponseEntity<>(workout, HttpStatus.OK);
        }
        @PutMapping("/workout/{id}")
        public ResponseEntity<Workout> updateWorkout(@PathVariable Long id, @RequestBody Workout workoutDetails) {
            Workout updatedWorkout = workoutService.updateWorkout(id, workoutDetails);
            return new ResponseEntity<>(updatedWorkout, HttpStatus.OK);
        }
        @DeleteMapping("/workout/{id}")
        public ResponseEntity<HttpStatus> deleteWorkout(@PathVariable Long id) {
            workoutService.deleteWorkout(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        // workout-advanced
        @GetMapping("/workout/user/{userId}")
        public ResponseEntity<List<Workout>> getWorkoutsByUserId(@PathVariable("userId") Long userId) {
            List<Workout> workouts = workoutService.getWorkoutsByUserId(userId);
            return ResponseEntity.ok(workouts);
        }
        @GetMapping("/workout/{year}/{month}")
        public ResponseEntity<List<Workout>> getAllWorkoutsByMonthAndYear(@PathVariable("year") int year, @PathVariable("month") int month) {
            try {
                List<Workout> workouts = workoutService.getAllWorkoutsByMonthAndYear(year, month);
                return ResponseEntity.ok(workouts);
            } catch (Exception e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
            }
        }
    // challenge

    // report

        @PostMapping("/report")
        public ResponseEntity<Report> createReport(@RequestBody Report report) {
            Report savedReport = reportService.saveReport(report);
            return new ResponseEntity<>(savedReport, HttpStatus.CREATED);
        }

    // post

}
