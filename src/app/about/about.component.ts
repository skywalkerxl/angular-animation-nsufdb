import { trigger, transition, state, style, group, animate, sequence, query } from '@angular/animations';
import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: [ './about.component.less' ],
  animations: [
    trigger('openClose', [
      transition(':enter', [
        group([
          query('.container-group', [
            style({
              width: 0,
              backgroundColor: '#4DAF7C'
            }),
            group([
              animate(
                '1s 0.1s ease',
                style({
                  width: '100%'
                })
              ),
              animate(
                '1s ease',
                style({
                  backgroundColor: '#22A7F0'
                })
              )
            ])
          ]),
          query('.container-sequence', [
            style({
              width: 0,
              backgroundColor: '#4DAF7C'
            }),
            sequence([
              animate(
                '1s 0.1s ease',
                style({
                  width: '100%'
                })
              ),
              animate(
                '1s ease',
                style({
                  backgroundColor: '#22A7F0'
                })
              )
            ])
          ])
        ])
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  @HostBinding('@openClose') animation = '';
  constructor() {}

  ngOnInit() {}
}
