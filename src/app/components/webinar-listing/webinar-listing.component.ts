import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebinarCardComponent } from '../webinar-card/webinar-card.component';
import { WebinarService, WebinarData } from '../../services/webinar.service';

@Component({
  selector: 'app-webinar-listing',
  standalone: true,
  imports: [CommonModule, WebinarCardComponent],
  templateUrl: './webinar-listing.component.html',
  styleUrl: './webinar-listing.component.css'
})
export class WebinarListingComponent implements OnInit {
  webinars: WebinarData[] = [];
  loading = true;

  constructor(private webinarService: WebinarService) { }

  ngOnInit(): void {
    this.loadWebinars();
  }

  loadWebinars(): void {
    // Simulate loading delay
    setTimeout(() => {
      this.webinars = this.webinarService.getAllWebinars();
      this.loading = false;
    }, 500);
  }

  refreshWebinars(): void {
    this.loading = true;
    this.loadWebinars();
  }

  getTotalWebinars(): number {
    return this.webinarService.getWebinarCount();
  }
}
