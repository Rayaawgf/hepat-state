import { Wilaya } from './../models/wilaya.model';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-communes',
  templateUrl: './communes.component.html',
  styleUrls: ['./communes.component.css'],
})
export class CommunesComponent implements OnChanges {
  @Input() wilaya:Wilaya = new Wilaya("","","",[]);

  constructor(
    private sharedService: SharedService,
    private route: ActivatedRoute
  ) {}
  basicData: any;
  basicOptions: any;
  dataFromBackWilayaLabel: any[] = [];
  dataFromBackWilayaData: any[] = [];

  ngOnChanges() {
    // this.route.paramMap.subscribe((params) => {
    //   this.selectedCommune = params.get('selectedCommune');
    // });
    this.sharedService
      .getStatsForCommunes(this.wilaya)
      .pipe(first())
      .subscribe((response: any[]) => {
        response.forEach((element) => {
          this.dataFromBackWilayaLabel.push(element['commune']);
          this.dataFromBackWilayaData.push(element['pourcentage']);
        });
      });

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.basicData = {
      labels: this.dataFromBackWilayaLabel,
      datasets: [
        {
          label: 'Graphe pour les maughataa de ',
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
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
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
  }
}
