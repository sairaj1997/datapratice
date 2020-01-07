import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countries:any=[];

  constructor(private ds:DataService) { }

  ngOnInit() {
    this.ds.getCountries().subscribe(d=>{
      this.countries=d;
    })
  }

}
