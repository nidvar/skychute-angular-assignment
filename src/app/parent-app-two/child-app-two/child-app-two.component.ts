import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-app-two',
  templateUrl: './child-app-two.component.html',
  styleUrls: ['./child-app-two.component.css']
})
export class ChildAppTwoComponent implements OnInit {

  @Output() send_input = new EventEmitter();

  constructor() { }
  

  ngOnInit(): void {
  }

  send_to_parent_two(value:string){
    this.send_input.emit(value)
  }


}