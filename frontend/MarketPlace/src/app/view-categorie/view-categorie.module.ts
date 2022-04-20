import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewCategoriePageRoutingModule } from './view-categorie-routing.module';

import { ViewCategoriePage } from './view-categorie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewCategoriePageRoutingModule
  ],
  declarations: [ViewCategoriePage]
})
export class ViewCategoriePageModule {}
