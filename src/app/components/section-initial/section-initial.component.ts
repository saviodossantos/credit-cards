import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import {
  faChevronRight,
  faUser
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-section-initial',
  templateUrl: './section-initial.component.html',
  styleUrls: ['./section-initial.component.scss'],
  animations: [
    trigger('loadPageAnimation', [
      transition(':enter', [
        style({ opacity: 0 }), animate('2s')
      ])
    ]),
    trigger('fadeTextAnimation', [
      transition(':enter', [
        style({ opacity: 0 }), animate('5s 3s')
      ])
    ]),
  ]
})
export class SectionInitialComponent {

  ngOnInit() {
  }

  faChevronRight = faChevronRight
  faUser = faUser

  

}
