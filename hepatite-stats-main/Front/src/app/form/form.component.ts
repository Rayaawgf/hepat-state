import { Commune } from './../models/commune.model';
import { SharedService } from './../shared.service';
import { Question } from './../models/question.model';
import { Answer } from './../models/answer.model';

import { Component } from '@angular/core';
import { Data } from '../models/data.model';
import { Wilaya } from '../models/wilaya.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  data  =  new Data();
  questionsList = this.data.questionsList;
  wilayas= this.data.wilayas;
  communes= this.data.communes;
  showDialog = false
  age = 0;
  sexe = "";
  wilaya = new Wilaya("","","",[]);
  commune = new Commune('');
  a_fait_un_test = "";
  frequence_a_boire_alcool = "";
  frequence_a_utiliser_drogue = "";
  a_des_rapports_sexuels_non_proteges = "";
  a_ete_vaccine = "";
  a_remarquer_jaunisse = "";
  avez_vous_etes_diagnostiquer = "";
  avez_vous_voyager  = "";
  avez_vous_ressenti_fatigue  = "";

  constructor(private sharedService: SharedService){}

  saveResponse(){
    var response = {
      age : this.age,
      sexe : this.  sexe,
      wilaya : this.  wilaya.nom,
      commune : this.  commune.nom,
      a_fait_un_test : this.  a_fait_un_test,
      frequence_a_boire_alcool : this.  frequence_a_boire_alcool,
      frequence_a_utiliser_drogue : this.  frequence_a_utiliser_drogue,
      a_des_rapports_sexuels_non_proteges : this.  a_des_rapports_sexuels_non_proteges,
      a_ete_vaccine : this.  a_ete_vaccine,
      a_remarquer_jaunisse : this.  a_remarquer_jaunisse,
      avez_vous_etes_diagnostiquer : this.  avez_vous_etes_diagnostiquer,
      avez_vous_voyager  : this.  avez_vous_voyager ,
      avez_vous_ressenti_fatigue  : this.  avez_vous_ressenti_fatigue ,
    };
    this.sharedService.saveResponse(response).subscribe(res => {
      this.resetValues();
      this.showAlertDialog();
    });
  }

  showAlertDialog(){
    this.showDialog = true;
  }

  resetValues(){
    this.age = 0;
    this.sexe = "";
    this.wilaya = new Wilaya("","","",[]);
    this.commune = new Commune('');
    this.a_fait_un_test = "";
    this.frequence_a_boire_alcool = "";
    this.frequence_a_utiliser_drogue = "";
    this.a_des_rapports_sexuels_non_proteges = "";
    this.a_ete_vaccine = "";
    this.a_remarquer_jaunisse = "";
    this.avez_vous_etes_diagnostiquer = "";
    this.avez_vous_voyager  = "";
    this.avez_vous_ressenti_fatigue  = "";
  }
}
