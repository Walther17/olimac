package com.example.demo.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Rol;
import com.example.demo.services.RolServices;

@RestController
@RequestMapping("/roles")
@CrossOrigin(origins = "http://localhost:4200")
public class RolController {

    @Autowired
    private RolServices rolServices;

    @PostMapping()
    public ResponseEntity<Rol> saveRol(@Valid @RequestBody Rol rol) {
        return ResponseEntity.ok(rolServices.saveRol(rol));
    }

    @GetMapping
    private List<Rol> getAllUsuarios() {
        return rolServices.getAllRoles();
    }
}
