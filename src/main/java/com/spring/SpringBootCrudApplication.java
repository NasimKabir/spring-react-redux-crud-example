package com.spring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.spring.model.Tutorial;
import com.spring.repository.TutorialRepository;

@SpringBootApplication
public class SpringBootCrudApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootCrudApplication.class, args);
	}
	
	@Bean
	CommandLineRunner run(TutorialRepository tutorialRepository) {
			return args ->{
				tutorialRepository.save(new Tutorial(1,"Spring Boot In Action","Nice book",true));	
				tutorialRepository.save(new Tutorial(2,"JPA In Action","Nice book",true));		

			};
		}

}
