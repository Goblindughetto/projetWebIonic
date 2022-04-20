import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriePageRoutingModule } from './categorie-routing.module';

import { CategoriePage } from './categorie.page';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CategoriePageRoutingModule
  ],
  declarations: [CategoriePage]
})
export class CategoriePageModule {}
