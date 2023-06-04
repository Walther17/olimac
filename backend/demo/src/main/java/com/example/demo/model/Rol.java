package com.example.demo.model;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.*;

@Data
@Entity
@Table(name = "rol")
public class Rol {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;


    @NotNull(message="El campo rol no puede ser nulo")
    @NotBlank(message = "El campo rol no puede estar vacio")
    @Size(max = 255, message = "El campo rol debe tener un máximo de 255 caracteres")
    @Column(name = "rol", nullable = false)
    private String rol;



    /* @ManyToOne
    @JoinColumn(name = "id_user")
    private Usuario user; */

}
