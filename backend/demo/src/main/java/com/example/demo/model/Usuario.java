package com.example.demo.model;

import java.util.List;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.*;


@Data
@Table(name = "usuario")
@Entity
public class Usuario  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull(message = "El campo usuario no puede ser nulo")
    @NotBlank(message = "El campo usuario no puede estar vacio")
    @Size(max = 255, message = "El campo usuario debe tener un máximo de 10 caracteres")
    @Column(name = "usuario", nullable = false)
    private String usuario;

    @NotNull(message="El campo password no puede ser nulo")
    @NotBlank(message = "El campo password no puede estar vacio")
    @Size(max = 255, message = "El campo password debe tener un máximo de 255 caracteres")
    @Column(name = "password", nullable = false)
    private String password;

    @NotNull(message="El campo nombre no puede ser nulo")
    @NotBlank(message = "El campo nombre no puede estar vacio")
    @Size(max = 255, message = "El campo nombre debe tener un máximo de 255 caracteres")
    @Column(name = "nombre", nullable = false)
    private String nombre;

    @NotNull(message="El campo apellido no puede ser nulo")
    @NotBlank(message = "El campo apellido no puede estar vacio")
    @Size(max = 255, message = "El campo apellido debe tener un máximo de 255 caracteres")
    @Column(name = "apellido", nullable = false)
    private String apellido;

    @NotBlank(message = "El campo estado no puede estar vacio")
    @Size(max = 1, message = "El campo estado debe tener un máximo de 1 caracteres")
    @Column(name = "estado")
    @Pattern(regexp = "[AI]", message = "El campo estado solo puede tener los valores: A Activo, I Inactivo")
    private String estado;

    @Email(message = "El correo no es válido.")
	@Size(min = 5, max = 255, message = "El correo debe ser mayor a 5 y menor a 255 caracteres.")
	@NotEmpty(message = "El correo es obligatorio.")
    @Column(name = "email")
	private String email;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "usuario_roles", joinColumns = @JoinColumn(name= "usuario_id", referencedColumnName = "id"),
        inverseJoinColumns = @JoinColumn(name= "rol_id", referencedColumnName = "id")
    )
    private List<Rol> roles;

    
}
