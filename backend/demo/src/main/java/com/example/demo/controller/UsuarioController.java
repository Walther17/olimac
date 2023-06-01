package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Usuario;
import com.example.demo.services.UsuarioServices;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "http://localhost:4200")
public class UsuarioController {

  @Autowired
  private UsuarioServices usuarioServices;

  @GetMapping
  private List<Usuario> getAllUsers() {
    return usuarioServices.getAllUsers();
  }

  @PostMapping()
  public ResponseEntity<Usuario> saveUsuario(@Valid @RequestBody Usuario usuario) {
    return ResponseEntity.ok(usuarioServices.saveUsuario(usuario));
  }

  @GetMapping("/{id}")
  public ResponseEntity<Usuario> getUsuariobyId(@PathVariable Integer id) {
    Usuario usuario = usuarioServices.getUsuarioById(id);
    return ResponseEntity.ok(usuario);
  }

  @PutMapping("/{id}")
  public ResponseEntity<Usuario> updateUsuario(@Valid @RequestBody Usuario usuario,  @PathVariable Integer id) {
        return ResponseEntity.ok(usuarioServices.updateUsuario(usuario , id));
    
  }
/* 
   @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarUsuario(@PathVariable Integer id) {
      usuarioServices.deleteUsuario(id);
        return ResponseEntity.noContent().build();
    }  */
/* 
      @PutMapping("/delete/{id}")
    public ResponseEntity<Usuario> deleteUsuario(@Valid @RequestBody Usuario usuario,  @PathVariable Integer id) {
        usuarioServices.deleteUsuarioById(usuario, id);
        return ResponseEntity.ok().build();
    } 
    */
     
}