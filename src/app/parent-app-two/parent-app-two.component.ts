import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-app-two',
  templateUrl: './parent-app-two.component.html',
  styleUrls: ['./parent-app-two.component.css']
})
export class ParentAppTwoComponent implements OnInit {

  constructor() { }
  display_text: string


  ngOnInit(): void {
  }

  accept(user_input: string){
    console.log(user_input)
    this.display_text = user_input
  }

}
