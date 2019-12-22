import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, transition, style, stagger, animate, query } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.less' ],
  animations: [
    trigger('openClose', [
      transition(':enter', [
        query('.innerList', [
          style({ backgroundColor: '#4DAF7C' }),
          stagger(-200, [ animate('500ms cubic-bezier(0.35, 0, 0.25, 1)') ])
        ])
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  @HostBinding('@openClose') animation = '';
  constructor() {}

  ngOnInit() {}
}
