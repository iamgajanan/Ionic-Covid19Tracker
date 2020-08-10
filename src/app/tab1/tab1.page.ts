import { Component } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  last_update
  data
  global
  constructor(private service:CovidService) {
  this.getWorld()
}

getWorld(){
  this.service.getall().subscribe(response=>{
    console.log(response)
    this.data=response
    this.global=this.data.Global
    console.log(this.global.TotalConfirmed.toLocaleString('en-IN'))
  })

}
}
