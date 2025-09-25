import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebinarCardComponent } from '../webinar-card/webinar-card.component';
import { WebinarService, WebinarData } from '../../services/webinar.service';

@Component({
  selector: 'app-live-webinar',
  standalone: true,
  imports: [CommonModule, WebinarCardComponent],
  templateUrl: './live-webinar.component.html',
  styleUrl: './live-webinar.component.css'
})
export class LiveWebinarComponent {
  @Input() webinars: WebinarData[] = [];

  constructor(private webinarService: WebinarService) { }

  ngOnInit(): void {
    if (this.webinars.length === 0) {
      this.webinars = this.webinarService.getAllWebinars().slice(0, 3);
    }
  }

  onViewAll(): void {
    // Handle view all action
    console.log('View all live webinars');
  }
}
