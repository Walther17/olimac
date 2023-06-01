import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditUsuarioComponent } from './components/edit-usuario/edit-usuario.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    EditUsuarioComponent,
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
