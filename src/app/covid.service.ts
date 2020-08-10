
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  //  Day one to last India data 
  // https://api.covid19api.com/total/dayone/country/India
private getalldata="https://api.covid19api.com/summary"
private getDistricturl="https://api.covid19india.org/state_district_wise.json"
private getStateurl="https://covid-india-cases.herokuapp.com/states"
  constructor(private http:HttpClient) { }
  getall():Observable<any[]>{
    return this.http.get<any[]>(this.getalldata)
   }
   getState():Observable<any[]>{
    return this.http.get<any[]>(this.getStateurl)
   }
   getDistrict():Observable<any[]>{
    return this.http.get<any[]>(this.getDistricturl)
   }
}
