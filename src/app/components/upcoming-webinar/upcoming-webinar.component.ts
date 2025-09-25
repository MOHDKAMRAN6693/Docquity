import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebinarCardComponent } from '../webinar-card/webinar-card.component';
import { WebinarService, WebinarData } from '../../services/webinar.service';

@Component({
  selector: 'app-upcoming-webinar',
  standalone: true,
  imports: [CommonModule, WebinarCardComponent],
  templateUrl: './upcoming-webinar.component.html',
  styleUrl: './upcoming-webinar.component.css'
})
export class UpcomingWebinarComponent {
  @Input() webinars: WebinarData[] = [];

  constructor(private webinarService: WebinarService) { }

  ngOnInit(): void {
    if (this.webinars.length === 0) {
      this.webinars = this.webinarService.getAllWebinars().slice(0, 3);
    }
  }

  onViewAll(): void {
    // Handle view all action
    console.log('View all upcoming webinars');
  }
}
