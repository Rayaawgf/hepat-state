import { Wilaya } from './../models/wilaya.model';
import { SharedService } from './../shared.service';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Data } from '../models/data.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit{
  constructor(private sharedService: SharedService) {}
  basicData: any;
  basicOptions: any;
  dataHomeFemmeGraph: any;
  basicDataCommunes:any
  allData = new Data();
  wilayas: Wilaya[] = this.allData.wilayas;
  selectedWilaya : Wilaya = new Wilaya("","","",[]);
  formGroup: FormGroup =  new FormGroup({
    selectedWilaya: new FormControl<Wilaya | null>(null),
  });

  labels: string[] = [];
  data: any[] = [];
  dataFromBackWilayaHommeFemmeLabel: any[] = [];
  dataFromBackWilayaHommeData: any[] = [];
  dataFromBackWilayaFemmeData: any[] = [];
  dataFromBackWilayaLabel: any[] = [];
  dataFromBackWilayaData: any[] = [];
  dataFromBackCommunesLabel: any[] = [];
  dataFromBackCommunesData: any[] = [];

  ngOnInit() {
    this.sharedService.getStatsForWilayas().subscribe((response: any[]) => {
      response.forEach((element) => {
        this.dataFromBackWilayaLabel.push(element['wilaya']);
        this.dataFromBackWilayaData.push(element['pourcentage']);
      });
    });
    this.sharedService
      .getStatsForWilayasHommeFemme()
      .subscribe((response: any[]) => {
        response.forEach((element) => {
          this.dataFromBackWilayaHommeFemmeLabel.push(element['wilaya']);
          this.dataFromBackWilayaHommeData.push(element['pourcentageHomme']);
          this.dataFromBackWilayaFemmeData.push(element['pourcentageFemme']);
        });
      });

    const documentStyle = getComputedStyle(document.documentElement);
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );

    this.basicData = {
      labels: this.dataFromBackWilayaLabel,
      datasets: [
        {
          label: 'Pourcentage',
          data: this.dataFromBackWilayaData,
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            'rgb(255, 159, 64)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
          ],
          borderWidth: 1,
        },
      ],
    };


    this.basicOptions = {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary,
            min: 0,
            max: 100,
            stepSize: 10,
          },
        },
        x: {
          ticks: {
            color: textColorSecondary,
          },
        },
      },
    };

    this.dataHomeFemmeGraph = {
      labels: this.dataFromBackWilayaHommeFemmeLabel,
      datasets: [
        {
          label: 'Homme',
          backgroundColor: documentStyle.getPropertyValue('--blue-500'),
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          data: this.dataFromBackWilayaHommeData,
        },
        {
          label: 'Femme',
          backgroundColor: documentStyle.getPropertyValue('--pink-500'),
          borderColor: documentStyle.getPropertyValue('--pink-500'),
          data: this.dataFromBackWilayaFemmeData,
        },
      ],
    };
  }


  onChangeWilaya(event:any){
    this.dataFromBackCommunesLabel= [];
    this.dataFromBackCommunesData= [];
    const documentStyle = getComputedStyle(document.documentElement);
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    this.sharedService
    .getStatsForCommunes(this.selectedWilaya)
    .subscribe((response: any[]) => {
      console.log(response);
      response.forEach((element) => {
        this.dataFromBackCommunesLabel.push(element['commune']);
        this.dataFromBackCommunesData.push(element['pourcentage']);
      });
    });

    this.basicDataCommunes = {
      labels: this.dataFromBackCommunesLabel,
      datasets: [
        {
          label: 'Pourcentage',
          data: this.dataFromBackCommunesData,
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            'rgb(255, 159, 64)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
          ],
          borderWidth: 1,
        },
      ],
    };


  }

}
