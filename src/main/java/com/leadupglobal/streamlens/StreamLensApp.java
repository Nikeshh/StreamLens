package com.leadupglobal.streamlens;

import com.leadupglobal.streamlens.configuration.JpaConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@Import(JpaConfiguration.class)
@SpringBootApplication(scanBasePackages = {"com.leadupglobal.streamlens"})
public class StreamLensApp {
    public static void main(String[] args) {
        SpringApplication.run(StreamLensApp.class, args);
    }
}
