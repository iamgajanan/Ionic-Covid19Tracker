import { Component } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
data
global
Date
  constructor(private service :CovidService) {
    this.getIndia()
  }
  getIndia(){
    this.service.getall().subscribe(response=>{
      console.log(response)
      this.data=response
      this.global=this.data.Countries[76]
      this.Date=this.data.Date
      console.log(this.Date)
    })
  }
}
