import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../core/models/usuario.model';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  usuario: Usuario = {
    id: 0,
    nombre: '',
    apellido: '',
    usuario: '',
    email: '',
    estado: '',
    password: '',
  };

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit() {
  }

   createUser(){
   
    this.usuarioService.createUsuario(this.usuario).subscribe(user=>{
      /* next: (res)  => console.log(res),
      error: (error) => console.log(error),
      complete: () => console.log("completed"), */
      console.log('This is the user: ', user);

    });
    this.goToListUsuarios();
  }

  
  goToListUsuarios() {
    this.router.navigate(['/home']);
  }

  onSubmit() {
    this.createUser();
    console.log(this.usuario);
  }

}
