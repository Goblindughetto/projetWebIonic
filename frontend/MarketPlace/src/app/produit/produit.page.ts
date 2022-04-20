import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.page.html',
  styleUrls: ['./produit.page.scss'],
})
export class ProduitPage implements OnInit {

  produits: any;
  categorie: any;
  api: RestService;

  constructor(private route: ActivatedRoute,
    public restapi: RestService, 
    public loadingController: LoadingController, 
    public navController : NavController, 
    public router : Router) 
    { 
      this.api = restapi;
    }

  ngOnInit() {
    this.getCategorie(this.route.snapshot.paramMap.get('id'));
    this.getProduits();
  }

  async getCategorie(id) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getCategorie(id)
      .subscribe(res => {
        console.log(res);
        this.categorie = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  async getProduits() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getProduits(this.route.snapshot.paramMap.get('id'))
      .subscribe(res => {
        console.log(res);
        this.produits = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  async deleteProduit(id:any){
    await this.api.deleteProduit(id)
    .subscribe(res => {
        console.log(res);
        this.ngOnInit();
      }, (err) => {
        console.log(err);
      });
  }

  delete(id:any) {
    this.deleteProduit(id);
  }

  ionViewWillEnter() {
    this.ngOnInit();
  }

}
