import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'hépatite-project';
  constructor(private sharedService: SharedService){}
  ngOnInit(): void {
    this.sharedService.ImportDataFromExcelFile().subscribe(res => {
      console.log(res['message']);
    })
  }


}
