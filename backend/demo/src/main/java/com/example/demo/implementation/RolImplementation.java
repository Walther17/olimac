package com.example.demo.implementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Rol;
import com.example.demo.repository.RolRepository;
import com.example.demo.services.RolServices;

@Service
public class RolImplementation implements RolServices {

    @Autowired
    private RolRepository rolRepository;

    @Override
    public Rol saveRol(Rol rol) {
        return rolRepository.save(rol);
    }

    @Override
    public List<Rol> getAllRoles() {
        return rolRepository.findAll();
    }

}
