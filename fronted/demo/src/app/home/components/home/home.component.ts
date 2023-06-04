import { Component, OnInit,  ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/core/models/usuario.model';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Subject, Subscription } from 'rxjs'
import { tap } from 'rxjs/operators'
import { BehaviorSubject } from 'rxjs';
import { Rol } from 'src/app/core/models/rol.model';

declare var $  : any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  usuarios$: BehaviorSubject<Usuario[]> = new BehaviorSubject<Usuario[]>([]);

  usuarios: Usuario[] ;

  roles: Rol[];

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
    rol: 
      {
        id: 0,
        rol: '',
    }
  }


  subscripcion: Subscription;
  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
  ) { 
    this.getAllRoles()
    this.buildForm();


  }


  ngOnInit() {
    this.getAllUsuarios();
    this.subscripcion = this.usuarioService.refresh$.subscribe(() => {
      this.getAllUsuarios();
    })
    this.getAllRoles();


  }

  getAllRoles(): void {
    this.usuarioService.getAllRoles().subscribe(dato => {
      this.roles= dato;
      console.log(dato)
    });
  }





  getAllUsuarios(): void {
    this.usuarioService.getAllUsuarios().subscribe(dato => {
      this.usuarios = dato;
      this.usuarios = dato.filter((usuario) => usuario.estado === 'A');
      console.log(dato)
    });
  }

  deleteUsuario(id: number) {
 

    this.usuarioService.deleteUsuario(id, this.deleteUser).subscribe((dato) => {
      console.log(dato)
      this.getAllUsuarios()
     
    });

  
  }

  createUser2(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const user = this.form.value;
      this.usuarioService.createUsuario(user).subscribe((newUser) => {
        this.usuarios.push(user as Usuario); 
        $("#exampleModalNew").modal('hide');
        console.log('This is the user: ', newUser);
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
      rol:['', [Validators.required]]
    });
  }


 

  // INSTALAR ICONS DE BOOSTRAPS



}
