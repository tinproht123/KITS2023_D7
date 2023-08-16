package com.example.fittracker.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@Entity
@Table(name = "users",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "username"),
                @UniqueConstraint(columnNames = "email")
        })
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(nullable = false)
    @NotEmpty(message = "First_name is not null")
    private String firstName;

    @Column(nullable = false)
    @NotEmpty(message = "Last_name is not null")
    private String lastName;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    @Email(message = "Invalid email format")
    private String email;

    @Column(nullable = false)
    @NotEmpty(message = "Password is not null")
//    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$")
//    @Pattern(regexp = "^[a-zA-Z0-9]{8,16}$")
//    @Pattern(regexp = "^[a-zA-Z0-9]{6,}$")
    private String password;

    @Column
    private String gender;

    @Column
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime birthday;

    @Column
    private String city;

    @Column
    private String country;

//    @Column(nullable = false)
    @DecimalMin("0.01")
    private BigDecimal weight;

//    @Column(nullable = false)
    @DecimalMin("0.01")
    private BigDecimal height;

    @Column(columnDefinition = "varchar(255) DEFAULT './blank-profile-picture.png'")
    private String image;

    @OneToMany(mappedBy = "user")
    private List<Post> posts = new ArrayList<>();

    @ManyToMany
    @JoinTable(
            name = "user_friends",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "friend_id")
    )
    private List<User> friends = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<UserChallenge> challenges = new ArrayList<>();

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(  name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    @ManyToMany
    @JoinTable(
            name = "user_achievements",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "achievement_id")
    )
    private List<Achievement> achievements = new ArrayList<>();

    public User(String firstName, String lastName, String username, String email, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
