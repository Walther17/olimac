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

  usuario: Usuario = {
    id: 0,
    nombre: '',
    apellido: '',
    usuario: '',
    email: '',
    estado: '',
    password: '',
  };

  form: FormGroup;

  constructor(private usuarioService: UsuarioService, 
    private router: Router,
    private formBuilder: FormBuilder,) {
      this.buildForm()
    }

  ngOnInit() {
  }

   createUser(event: Event){
   event?.preventDefault();
   if (this.form.valid) {
    const user = this.form.value;
    this.usuarioService.createUsuario(user).subscribe((newPromesa)=>{
      console.log('This is the user: ', newPromesa);
      this.goToListUsuarios();

    });
   }
   
  }

  private buildForm() {
    this.form = this.formBuilder.group({
    
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required, Validators.minLength(4), ]],
      estado: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      usuario: ['', [Validators.required]],
    });
  }

  
  goToListUsuarios() {
    this.router.navigate(['/login']);
  }



}
