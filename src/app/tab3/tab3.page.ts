import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  data
  global
  selectedIndex
  dat=[]
  selectedData
  daaaaa
  show:boolean=false
  stateList=[]
  stateForm:FormGroup
  constructor(private service:CovidService,private fb:FormBuilder) {
    this.service.getState().subscribe(response=>{
      console.log(response)
      this.data=response
      // const values = Object.keys(response).map(it => response[it])
      // console.log(values)
      // console.log(JSON.stringify(this.data))
      // this.global=JSON.stringify(this.data)
      // console.log(this.global)
      // this.daaaaa= this.states(response);
    })
   }

  ngOnInit(): void {
    this.stateForm=this.fb.group(
      {
        state:['']
      }
    )
      }
      states(d){
        // console.log(d)
        // this.selectedData=event.target.value.replace(/\n/g, '');
        console.log(d)
        this.selectedData=d.target.value;
    
        console.log(this.selectedData)
      //  console.log(this.data)
     
      this.daaaaa= this.data.filter((d)=>d.state===this.selectedData
      )
      console.log(this.daaaaa[0].state)
      if(JSON.stringify(this.data)!=null){
        // var districtData=this.selectedData.
        if(this.daaaaa[0].state=== this.selectedData){
          this.show=true
        }
      }
    }
      selected(index){
        console.log(index)}
    }
    