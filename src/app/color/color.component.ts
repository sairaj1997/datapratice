import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'




@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color: any = [];
  color10:any = [];
  constructor(private tr: DataService) { }

  ngOnInit() {
    this.tr.getcolor().subscribe(d => {
      this.color = d;
      for(let i=0;i<10;i++){
        //console.log(this.color[i].name);
        this.color10.push(this.color[i]);

      }
      
    })
  }

}
