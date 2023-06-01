import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.scss']
})
export class EditUsuarioComponent implements OnInit{


  id: number;

  form: FormGroup;

  
  
  constructor(
    private usuarioService: UsuarioService, 
    private router: Router, 
    private route:ActivatedRoute,
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    ) {
      this.buildForm();
    }


  ngOnInit() {
   this.activeRoute.params.subscribe((params: Params)=> {
      this.id = params['id'];
      this.usuarioService.getUsuarioById(this.id).subscribe(dato =>{
        this.form.patchValue(dato);
        console.log(dato);
      },error => console.log(error)); 
    });
    
   
  }

  updateUser(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const usuario = this.form.value;
      this.usuarioService.updateUsuario(this.id, usuario).subscribe(dato => {
        console.log(dato)
      },error => console.log(error));  
      this.goToListUsers();
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

  
  goToListUsers(){
    this.router.navigate(['/home']);
    
  }

  
}
