import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import {
  faRightToBracket,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ right: '-100%' }), animate('.8s ease', style({  right: 0 }))
      ]),
      transition(':leave', [
        style({ right: 0}), animate('.8s ease', style({  right: '-100%' }))
      ]),
    ])
  ]
})
export class HeaderComponent {

  faRightToBracket = faRightToBracket
  faChevronDown = faChevronDown
  faLinkedin = faLinkedin
  faGithub = faGithub

  isOpen = false;

  toggle(){
    this.isOpen = !this.isOpen
  }

  aviso() {
    alert('Caminho indisponível')
  }
}
