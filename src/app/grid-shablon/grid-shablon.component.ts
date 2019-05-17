import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'grid-shablon',
  templateUrl: './grid-shablon.component.html',
  styleUrls: ['./grid-shablon.component.scss']
})
export class GridShablonComponent implements OnInit {

  @Input() themes = {
    "brown" : true,
    "grey"  : false

  };


  constructor() { }

  ngOnInit() {
  }

}
