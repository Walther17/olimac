package com.example.demo.services;

import java.util.List;

import com.example.demo.model.Rol;

public interface RolServices {
    
    public List<Rol> getAllRoles();

    public Rol saveRol(Rol rol);

   // public Rol getRolById(Integer id);

   // public Rol updateRol(Rol rol);

    //public void deleteRol(Integer id);

}
