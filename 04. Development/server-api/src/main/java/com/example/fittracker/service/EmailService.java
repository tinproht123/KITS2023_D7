package com.example.fittracker.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


@Service
public class EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    @Value("${spring.mail.username}")
    private String sender;

    public boolean sendMail(String content, String email) {
        // Try block to check for exceptions
        try {

            SimpleMailMessage mailMessage = new SimpleMailMessage();

            String subject = "Fit tracker";
            String msgBody = content;

            mailMessage.setFrom(sender);
            mailMessage.setTo(email);
            mailMessage.setText(msgBody);
            mailMessage.setSubject(subject);

            javaMailSender.send(mailMessage);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}