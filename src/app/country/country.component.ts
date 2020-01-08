import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countries:any=[];
  st:number = 100;


  constructor(private ds:DataService) { }

  ngOnInit() {
    this.ds.getCountries().subscribe(d=>{
      this.countries=d;

      
    })
    
  }
  next(){
    this.st+=10;
  }
  

}
