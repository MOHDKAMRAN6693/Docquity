import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  activeTab = 'webinar';

  navItems = [
    { id: 'home', label: 'Home', icon: '/icons/home.svg', active: false },
    { id: 'webinar', label: 'Webinar', icon: '/icons/webinar.svg', active: true },
    { id: 'book', label: 'SKP', icon: '/icons/book.svg', active: false },
    { id: 'calendar', label: 'Calendar', icon: '/icons/calendar.svg', active: false },
    { id: 'notifications', label: 'Notifications', icon: '/icons/bell.svg', active: false }
  ];

  user = {
    name: 'Aaron',
    profileImage: '/images/profile.png',
    hasBadge: true
  };

  onNavItemClick(itemId: string): void {
    this.activeTab = itemId;
    this.navItems.forEach(item => {
      item.active = item.id === itemId;
    });
  }

  onPostClick(): void {
    console.log('Post clicked');
  }

  onProfileClick(): void {
    console.log('Profile clicked');
  }

  onSearchSubmit(searchTerm: string): void {
    console.log('Search:', searchTerm);
  }
}
