package com.example.demo.implementation;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.demo.model.Usuario;
import com.example.demo.repository.UsuarioRepository;
import com.example.demo.services.UsuarioServices;

@Service
public class UsuarioImplementation implements UsuarioServices {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public List<Usuario> getAllUsuarios() {
        return usuarioRepository.findAll();
    }

    @Override
    public Usuario saveUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    @Override
    public Usuario getUsuarioById(Integer id) {
        return usuarioRepository.getUsuarioById(id);
    }

    @Override
    public Usuario updateUsuario(Usuario usuario, Integer id) {

        Optional<Usuario> existingUsuario = usuarioRepository.findById(id);

        if (existingUsuario != null && existingUsuario.get().getEstado() != null){
            Usuario userUpdate = existingUsuario.get();
               
            userUpdate.setNombre(usuario.getNombre());
            userUpdate.setApellido(usuario.getApellido());
            userUpdate.setEmail(usuario.getEmail());
            userUpdate.setEstado(usuario.getEstado());
            userUpdate.setUsuario(usuario.getUsuario());
            userUpdate.setPassword(usuario.getPassword()); 
            userUpdate.setRoles(usuario.getRoles());
    
            return usuarioRepository.save(userUpdate);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,
            "No se encontró el usuario con el ID especificado: " + id);
        }
        
    }

    @Override
    public void deleteUsuario(Integer id) {
        usuarioRepository.deleteById(id);
    }

    @Override
    public List<Usuario> getAllUsers() {

        List<Usuario> usuario = usuarioRepository.getAllUsers();
        if (usuario != null) {
            return usuario;
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No hay datos");
        }    
    }

    @Override
    public void setEstadoNull(Integer id) {

        

            usuarioRepository.setEstadoNull(id);

        
    }

  
   
   
   
}
