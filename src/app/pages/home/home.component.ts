import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselComponent } from '../../units/carousel/carousel.component';
import { FooterComponent } from '../../units/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
