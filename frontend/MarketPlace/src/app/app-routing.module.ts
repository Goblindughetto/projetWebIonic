import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-boutique',
    loadChildren: () => import('./add-boutique/add-boutique.module').then( m => m.AddBoutiquePageModule)
  },
  {
    path: 'view-boutique/:id',
    loadChildren: () => import('./view-boutique/view-boutique.module').then( m => m.ViewBoutiquePageModule)
  },
  
  
  
  
  {
    path: ':id/categories',
    loadChildren: () => import('./categorie/categorie.module').then( m => m.CategoriePageModule)
  },
  {
    path: ':id/add-categorie',
    loadChildren: () => import('./add-categorie/add-categorie.module').then( m => m.AddCategoriePageModule)
  },
  {
    path: 'view-categorie/:id',
    loadChildren: () => import('./view-categorie/view-categorie.module').then( m => m.ViewCategoriePageModule)
  },




  {
    path: ':id/produits',
    loadChildren: () => import('./produit/produit.module').then( m => m.ProduitPageModule)
  },
  {
    path: ':id/add-produit',
    loadChildren: () => import('./add-produit/add-produit.module').then( m => m.AddProduitPageModule)
  },
  {
    path: 'view-produit/:id',
    loadChildren: () => import('./view-produit/view-produit.module').then( m => m.ViewProduitPageModule)
  },
  
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
