package com.example.demo.services;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import com.example.demo.model.Usuario;

public interface UsuarioServices {
    
    public List<Usuario> getAllUsuarios();

    @Query("SELECT u FROM Usuario u WHERE u.estado = 'A'")
    public List<Usuario> getAllUsers();

    public Usuario saveUsuario(Usuario usuario);

    @Query("SELECT u FROM Usuario u WHERE u.id = :id AND u.estado = 'A' ")
    public Usuario getUsuarioById(Integer id);

    public Usuario updateUsuario(Usuario usuario, Integer id);

    public void deleteUsuario(Integer id);

    //public void deleteUsuarioById(Usuario usuario, Integer id);

    
}
