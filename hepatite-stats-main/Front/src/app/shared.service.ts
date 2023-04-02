import { Wilaya } from './models/wilaya.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://127.0.0.1:8000/";

  constructor(private http: HttpClient) { }


  // getQuestions() {
  //   return this.http.get<any>(this.apiUrl + 'get-questions');
  // }


  ImportDataFromExcelFile(): Observable<any> {
    return this.http.get<any>(this.APIUrl + 'import-data/');
  }
  saveResponse(data:any): Observable<any> {
    return this.http.post<any>(this.APIUrl + 'save-response/', data);
  }

  getResponses(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + 'get-responses/');
  }

  getStatsForWilayas(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + 'get-stats-wilayas/');
  }

  getStatsForWilayasHommeFemme(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + 'get-stats-wilayas-homme-femme/');
  }

  getStatsForCommunes(wilaya:Wilaya): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + wilaya.urlToBack);
  }
}
