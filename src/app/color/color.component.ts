import { Component, OnInit } from '@angular/core';
import{DataService}from '../data.service'

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
color:any=[];
  constructor(private tr:DataService) { }

  ngOnInit() {
    this.tr.getcolor().subscribe(d=>{
      this.color=d;
    })
  }

}
