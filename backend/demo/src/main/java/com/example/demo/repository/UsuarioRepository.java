package com.example.demo.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

    @Query("SELECT u FROM Usuario u WHERE u.estado = 'A'")
    List<Usuario> getAllUsers();

    @Query("SELECT u FROM Usuario u WHERE u.id = :id AND u.estado = 'A' ")
    public Usuario getUsuarioById(Integer id);


    @Transactional
    @Modifying
    @Query("UPDATE Usuario u SET u.estado = null WHERE u.id = ?1  ")
    public void setEstadoNull( Integer id);



  
}
