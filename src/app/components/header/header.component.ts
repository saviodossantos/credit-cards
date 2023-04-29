import { Component } from '@angular/core';
import { 
   faRightToBracket,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  faRightToBracket = faRightToBracket
  faChevronDown = faChevronDown

  aviso(){
    alert('Caminho indisponível')
  }
}
