import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../core/models/usuario.model';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  
  usuarios: Usuario[] ;


  form: FormGroup;

  constructor(private usuarioService: UsuarioService, 
    private router: Router,
    private formBuilder: FormBuilder,) {
      this.buildForm()
    }

  ngOnInit() {
  }

  createUser2(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const user = this.form.value;
      this.usuarioService.createUsuario(user).subscribe((newUser) => {
        console.log('This is the user: ', newUser);
      });
    }

  }

  private buildForm() {
    this.form = this.formBuilder.group({
    
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required, Validators.minLength(4), ]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      usuario: ['', [Validators.required]],
    });
  }

  
  goToListUsuarios() {
    this.router.navigate(['/login']);
  }



}
