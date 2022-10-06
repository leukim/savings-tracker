package com.leukim.savingstracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
public class SavingsTrackerApplication {

	public static void main(String[] args) {
		SpringApplication.run(SavingsTrackerApplication.class, args);
	}

}
