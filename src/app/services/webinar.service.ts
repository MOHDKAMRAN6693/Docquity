import { Injectable } from '@angular/core';

export interface WebinarData {
  // Organization Information
  organization: {
    name: string;
    logo: string;
    sponsor: string;
    followersCount: number;
    timeAgo: string;
  };

  // Webinar Content
  content: {
    image: string;
    title: string;
    duration: string;
    credits: {
      count: number;
      expiringDays: number;
    };
    keyHighlights: {
      header: string;
      content: string;
    };
    notifyDate?: string;
  };

  // Engagement Statistics
  engagement: {
    likes: number;
    comments: number;
    views: number;
  };

  // Action Buttons
  actions: {
    follow: {
      text: string;
      icon: string;
    };
    menu: {
      icon: string;
      alt: string;
    };
    bottomActions: Array<{
      icon: string;
      text: string;
      alt: string;
    }>;
  };
}

@Injectable({
  providedIn: 'root'
})
export class WebinarService {

  private webinars: WebinarData[] = [
    {
      organization: {
        name: 'PGDI Indonesia',
        logo: '/icons/organization.svg',
        sponsor: 'Sponsored by Roche',
        followersCount: 2845,
        timeAgo: '30 min ago'
      },
      content: {
        image: '/images/webinar-1.png',
        title: 'New Perspectives in The Covid19 Management of Parox Health caretine',
        duration: '45:30',
        notifyDate: '7 Jan 2025, 12:30 PM',
        credits: {
          count: 2,
          expiringDays: 12
        },
        keyHighlights: {
          header: 'KEY HIGHLIGHTS',
          content: 'Manage chronic and complex diseases'
        },
      },
      engagement: {
        likes: 20,
        comments: 12,
        views: 750
      },
      actions: {
        follow: {
          text: 'Follow',
          icon: '+'
        },
        menu: {
          icon: '/icons/three-dot.svg',
          alt: 'three-dots'
        },
        bottomActions: [
          {
            icon: '/icons/upvote.svg',
            text: 'Like',
            alt: 'like'
          },
          {
            icon: '/icons/comment.svg',
            text: 'Comment',
            alt: 'comment'
          },
          {
            icon: '/icons/repost.svg',
            text: 'Repost',
            alt: 'repost'
          },
          {
            icon: '/icons/forward.svg',
            text: 'Share',
            alt: 'forward'
          }
        ]
      }
    },
    {
      organization: {
        name: 'Medical Academy',
        logo: '/icons/organization.svg',
        sponsor: 'Sponsored by Pfizer',
        followersCount: 1520,
        timeAgo: '2 hours ago'
      },
      content: {
        image: '/images/webinar-1.png',
        title: 'Advanced Cardiology Techniques for Modern Healthcare Professionals',
        duration: '45:30',
        notifyDate: '7 Jan 2025, 12:30 PM',
        credits: {
          count: 3,
          expiringDays: 7
        },
        keyHighlights: {
          header: 'KEY HIGHLIGHTS',
          content: 'Learn advanced cardiac procedures'
        },
      },
      engagement: {
        likes: 45,
        comments: 23,
        views: 1200
      },
      actions: {
        follow: {
          text: 'Follow',
          icon: '+'
        },
        menu: {
          icon: '/icons/three-dot.svg',
          alt: 'three-dots'
        },
        bottomActions: [
          {
            icon: '/icons/upvote.svg',
            text: 'Like',
            alt: 'like'
          },
          {
            icon: '/icons/comment.svg',
            text: 'Comment',
            alt: 'comment'
          },
          {
            icon: '/icons/repost.svg',
            text: 'Repost',
            alt: 'repost'
          },
          {
            icon: '/icons/forward.svg',
            text: 'Share',
            alt: 'forward'
          }
        ]
      }
    },
    {
      organization: {
        name: 'HealthTech Solutions',
        logo: '/icons/organization.svg',
        sponsor: 'Sponsored by Johnson & Johnson',
        followersCount: 3200,
        timeAgo: '1 day ago'
      },
      content: {
        image: '/images/webinar-1.png',
        title: 'Digital Health Innovations: Transforming Patient Care in 2024',
        duration: '45:30',
        notifyDate: '7 Jan 2025, 12:30 PM',
        credits: {
          count: 1,
          expiringDays: 15
        },
        keyHighlights: {
          header: 'KEY HIGHLIGHTS',
          content: 'Explore cutting-edge digital health technologies'
        }
      },
      engagement: {
        likes: 78,
        comments: 34,
        views: 2100
      },
      actions: {
        follow: {
          text: 'Follow',
          icon: '+'
        },
        menu: {
          icon: '/icons/three-dot.svg',
          alt: 'three-dots'
        },
        bottomActions: [
          {
            icon: '/icons/upvote.svg',
            text: 'Like',
            alt: 'like'
          },
          {
            icon: '/icons/comment.svg',
            text: 'Comment',
            alt: 'comment'
          },
          {
            icon: '/icons/repost.svg',
            text: 'Repost',
            alt: 'repost'
          },
          {
            icon: '/icons/forward.svg',
            text: 'Share',
            alt: 'forward'
          }
        ]
      }
    },
    {
      organization: {
        name: 'Pediatric Institute',
        logo: '/icons/organization.svg',
        sponsor: 'Sponsored by Merck',
        followersCount: 1890,
        timeAgo: '3 days ago'
      },
      content: {
        image: '/images/webinar-1.png',
        title: 'Pediatric Emergency Medicine: Best Practices and Case Studies',
        duration: '45:30',
        notifyDate: '7 Jan 2025, 12:30 PM',
        credits: {
          count: 4,
          expiringDays: 5
        },
        keyHighlights: {
          header: 'KEY HIGHLIGHTS',
          content: 'Master pediatric emergency protocols and treatments'
        }
      },
      engagement: {
        likes: 32,
        comments: 18,
        views: 890
      },
      actions: {
        follow: {
          text: 'Follow',
          icon: '+'
        },
        menu: {
          icon: '/icons/three-dot.svg',
          alt: 'three-dots'
        },
        bottomActions: [
          {
            icon: '/icons/upvote.svg',
            text: 'Like',
            alt: 'like'
          },
          {
            icon: '/icons/comment.svg',
            text: 'Comment',
            alt: 'comment'
          },
          {
            icon: '/icons/repost.svg',
            text: 'Repost',
            alt: 'repost'
          },
          {
            icon: '/icons/forward.svg',
            text: 'Share',
            alt: 'forward'
          }
        ]
      }
    }
  ];

  constructor() { }

  // Get all webinars
  getAllWebinars(): WebinarData[] {
    return this.webinars;
  }

  // Get webinar by index
  getWebinarById(index: number): WebinarData | undefined {
    return this.webinars[index];
  }

  // Add new webinar
  addWebinar(webinar: WebinarData): void {
    this.webinars.push(webinar);
  }

  // Update webinar
  updateWebinar(index: number, webinar: WebinarData): void {
    if (index >= 0 && index < this.webinars.length) {
      this.webinars[index] = webinar;
    }
  }

  // Delete webinar
  deleteWebinar(index: number): void {
    if (index >= 0 && index < this.webinars.length) {
      this.webinars.splice(index, 1);
    }
  }

  // Get total count
  getWebinarCount(): number {
    return this.webinars.length;
  }
}
