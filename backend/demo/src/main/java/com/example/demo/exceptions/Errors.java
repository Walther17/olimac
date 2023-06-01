package com.example.demo.exceptions;

import java.util.List;

import org.springframework.http.HttpStatus;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Errors {
    private HttpStatus status;
    private String message;
    private List<String> errors;
}
