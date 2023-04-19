package com.sika.backend;

import com.sika.backend.controller.PersonController;
import com.sika.backend.model.Person;
import com.sika.backend.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Date;

@SpringBootApplication
public class SikaBackendApplication {
	public static void main(String[] args) {
		SpringApplication.run(SikaBackendApplication.class, args);
	}
}
