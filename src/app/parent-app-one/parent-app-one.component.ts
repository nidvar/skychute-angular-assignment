import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-app-one',
  templateUrl: './parent-app-one.component.html',
  styleUrls: ['./parent-app-one.component.css']
})
export class ParentAppOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  the_text = ''



  onInput(value:string){
    console.log(value)
    this.the_text = value
  }

  
}
