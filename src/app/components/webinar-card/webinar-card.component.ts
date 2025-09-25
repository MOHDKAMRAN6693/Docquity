import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebinarData } from '../../services/webinar.service';

@Component({
  selector: 'app-webinar-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './webinar-card.component.html',
  styleUrl: './webinar-card.component.css'
})
export class WebinarCardComponent {
  @Input() webinarData!: WebinarData;
  @Input() showCardHeader: boolean = false;
  @Input() showWebinarEngagement: boolean = false;
  @Input() showCardActionsBottom: boolean = false;
  @Input() showWatchNowButton: boolean = false;
  @Input() showWebinarNotify: boolean = true;
  @Input() showWebinarStatus: boolean = false;
  @Input() showWebinarDuration: boolean = false;

  constructor() {
  }

  // Helper methods for formatting
  formatFollowersCount(count: number): string {
    return count.toLocaleString() + ' followers';
  }

  formatCreditsText(count: number, expiringDays: number): string {
    return `${count} Credits (Expiring in ${expiringDays} days)`;
  }

  formatEngagementStats(likes: number, comments: number, views: number): string {
    return `${likes} Likes • ${comments} Comments • ${views} Views`;
  }
}
