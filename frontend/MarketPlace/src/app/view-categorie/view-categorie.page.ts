import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-view-categorie',
  templateUrl: './view-categorie.page.html',
  styleUrls: ['./view-categorie.page.scss'],
})
export class ViewCategoriePage implements OnInit {
  categorie : any;
  api : RestService;
  id : string;
  name : string;

  constructor(public restapi: RestService, 
    public loadingController: LoadingController, 
    private route: ActivatedRoute, 
    public router : Router) {

    this.api = restapi;
  }
  
  async getCategorie(id:any) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getCategorie(this.id)
      .subscribe(res => {
        console.log(res);
        this.categorie = res;
        this.name = this.categorie.name;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  async saveCategorie(){
    await this.api.updateCategorie(this.categorie._id, this.categorie)
    .subscribe(res => {
        console.log(res);
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      });
  }

  async deleteCategorie(){
    await this.api.deleteCategorie(this.categorie._id)
    .subscribe(res => {
        console.log(res);
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      });
  }

  save() {
    console.log(this.name);
    console.log(this.categorie._id);

    this.categorie.name = this.name;
    this.saveCategorie();
  }

  delete() {
    this.deleteCategorie(); 
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap)=> {
      this.id = params.get('id');
    });
    console.log("Current id: " + this.id);
    this.getCategorie(this.id);
  }
 
}
