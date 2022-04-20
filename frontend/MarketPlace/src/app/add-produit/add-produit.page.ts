import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap, Router  } from '@angular/router';


@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.page.html',
  styleUrls: ['./add-produit.page.scss'],
})

export class AddProduitPage implements OnInit {

  private produit : FormGroup;
  public api : RestService;
  private categorie_id: any;

  constructor(public restapi: RestService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) 
    {
      this.produit = this.formBuilder.group({
            name: [''],
            categorie_id: [''],
            price: [],
          });
      this.api = restapi;
  }

  async saveProduit(){
    await this.api.createProduit(this.produit.value)
    .subscribe(res => {
        this.router.navigate([this.categorie_id + '/produits']);
      }, (err) => {
        console.log(err);
      });
  }

  save() {
    console.log(this.produit.value);
    this.saveProduit();
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap)=> {
      this.categorie_id = params.get('id');
    });
    this.produit.controls['categorie_id'].setValue(this.categorie_id);
  }

}