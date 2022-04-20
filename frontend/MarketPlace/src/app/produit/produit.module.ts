import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProduitPageRoutingModule } from './produit-routing.module';

import { ProduitPage } from './produit.page';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ProduitPageRoutingModule
  ],
  declarations: [ProduitPage]
})
export class ProduitPageModule {}
