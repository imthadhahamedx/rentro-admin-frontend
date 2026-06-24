import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface NavLink {
  href: string;
  label: string;
  active: boolean;
}

@Component({
  selector: 'app-home-page-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './home-page-header.html',
  styleUrl: './home-page-header.scss',
})
export class HomePageHeader {
  navLinks: NavLink[] = [
    { href: '/process/home', label: 'Home', active: true },
    { href: '/process/fleet', label: 'Fleet', active: false },
    { href: '/process/about', label: 'About', active: false },
    { href: '/process/contact', label: 'Contact', active: false },
  ];

  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
