import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {

  categories: any;
  boutique: any;
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
    this.getBoutique(this.route.snapshot.paramMap.get('id'));
    this.getCategories();
  }

  async getBoutique(id) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getBoutique(id)
      .subscribe(res => {
        console.log(res);
        this.boutique = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  async getCategories() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getCategories(this.route.snapshot.paramMap.get('id'))
      .subscribe(res => {
        console.log(res);
        this.categories = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  async deleteCategorie(id:any){
    await this.api.deleteCategorie(id)
    .subscribe(res => {
        console.log(res);
        this.ngOnInit();
      }, (err) => {
        console.log(err);
      });
  }

  delete(id:any) {
    this.deleteCategorie(id);
  }

  ionViewWillEnter() {
    this.ngOnInit();
  }

}
