import { Component } from '@angular/core';
import { 
  faChevronRight,
  faUser
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-section-initial',
  templateUrl: './section-initial.component.html',
  styleUrls: ['./section-initial.component.scss']
})
export class SectionInitialComponent {
  faChevronRight = faChevronRight
  faUser = faUser

}
