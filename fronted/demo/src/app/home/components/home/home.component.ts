import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/core/models/usuario.model';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Subject, Subscription } from 'rxjs'
import { tap } from 'rxjs/operators'
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  usuarios$: BehaviorSubject<Usuario[]> = new BehaviorSubject<Usuario[]>([]);

  usuarios: Usuario[] ;

  id: number;

  form: FormGroup;

  deleteUser: Usuario = {
    id: 0,
    nombre: '',
    apellido: '',
    usuario: '',
    email: '',
    estado: '',
    password: '',
  }

  newUsuario: Usuario = {
    id: 0,
    nombre: '',
    apellido: '',
    usuario: '',
    email: '',
    estado: '',
    password: '',
  }

  subscripcion: Subscription;
  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
  ) { }


  ngOnInit() {
    this.getAllUsuarios();
    this.subscripcion = this.usuarioService.refresh$.subscribe(() => {
      this.getAllUsuarios();
    })

  }



  getAllUsuarios(): void {
    this.usuarioService.getAllUsuarios().subscribe(dato => {
      this.usuarios = dato;
      console.log(dato)
    });
  }

  createUser() {

    this.usuarioService.createUsuario(this.newUsuario).subscribe(user => {
      this.usuarios.push(user as Usuario); // Agrego el nuevo usuario a la lista
      console.log('This is the user: ', user);
    });
  }

  deleteUsuario(id: number) {
   /*  this.usuarioService.deleteUsuario(id, this.deleteUser).subscribe(dato => {
      const index = this.usuarios.findIndex(usuario => usuario.id === id);
      if (index !== -1) {
        this.usuarios.splice(index, 1);
      }
    })  */

    this.usuarioService.deleteUsuario(id, this.deleteUser).subscribe(() => {
      const index = this.usuarios.findIndex(usuario => usuario.id === id);
      if (index !== -1) {
        this.usuarios.splice(index, 1);
      }
    });

    /* this.usuarioService.deleteUsuario(id, this.deleteUser).subscribe(dato => {
      const index = this.usuarios$.value.findIndex(usuario => usuario.id === id);
      if (index !== -1) {
        const newUsuarios = [...this.usuarios$.value];
        newUsuarios.splice(index, 1);
        this.usuarios$.next(newUsuarios);
      }
    }); */
  }


  onSubmitCreateNewUser() {
    this.createUser();
  }


  /*
   usuarios: Usuario[];

  id: number;

  form: FormGroup;




  newUsuario: Usuario = {
    id: 0,
    nombre: '',
    apellido: '',
    usuario: '',
    email: '',
    estado: '',
    password: '',
  };

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
  ) {
    this.buildForm();
  }


  ngOnInit() {
    this.getAllUsuarios();

  }


  getAllUsuarios() {
    this.usuarioService.getAllUsuarios().subscribe(dato => {
      this.usuarios = dato;
      console.log(dato)
    });
  }

  createUser(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const user = this.form.value;
      this.usuarioService.createUsuario(user).subscribe(user => {
        console.log('This is the user: ', user);
      });
    }

  }

  private buildForm() {
    this.form = this.formBuilder.group({

      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required,]],
      estado: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      usuario: ['', [Validators.required]],
    });
  }

  deleteUsuario(id: number) {
    this.usuarioService.deleteUsuario(id, this.newUsuario).subscribe(dato => {
      console.log(dato);
      this.getAllUsuarios();
    })
  } 
  */



}
