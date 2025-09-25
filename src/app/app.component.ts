import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LiveWebinarComponent } from './components/live-webinar/live-webinar.component';
import { UpcomingWebinarComponent } from './components/upcoming-webinar/upcoming-webinar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, LiveWebinarComponent, UpcomingWebinarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'docquity-app';
}
