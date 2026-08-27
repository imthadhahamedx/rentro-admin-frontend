import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VehicleSearchModalComponent } from '../../components/vehicle-search-modal/vehicle-search-modal';
import { VehicleSearchParams } from '../../dto/vehicle.model';

interface Step {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, VehicleSearchModalComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  // ── Hero search form ──────────────────────────────────────────────────────
  search = {
    pickupLocation: '',
    pickupDate: '',
    returnDate: '',
  };

  // ── Search modal state ────────────────────────────────────────────────────
  searchModalOpen = false;
  activeSearchParams!: VehicleSearchParams;
  searchError: string | null = null;

  onSearch(): void {
    this.searchError = null;

    if (!this.search.pickupLocation) {
      this.searchError = 'Please select a pickup location.';
      return;
    }
    if (!this.search.pickupDate) {
      this.searchError = 'Please select a pickup date.';
      return;
    }
    if (!this.search.returnDate) {
      this.searchError = 'Please select a return date.';
      return;
    }
    if (new Date(this.search.returnDate) <= new Date(this.search.pickupDate)) {
      this.searchError = 'Return date must be after pickup date.';
      return;
    }

    this.activeSearchParams = {
      pickupLocation: this.search.pickupLocation,
      pickupDate:     this.search.pickupDate,
      returnDate:     this.search.returnDate,
    };

    this.searchModalOpen = true;
  }

  onSearchModalClosed(): void {
    this.searchModalOpen = false;
  }

  // ── Stats ─────────────────────────────────────────────────────────────────
  stats = [
    { value: '120+', label: 'Vehicles available' },
    { value: '8',    label: 'Pickup locations' },
    { value: '15k+', label: 'Happy customers' },
    { value: '24/7', label: 'Roadside support' },
  ];

  // ── How it works ──────────────────────────────────────────────────────────
  steps: Step[] = [
    {
      icon: 'search',
      title: 'Choose your vehicle',
      description:
        'Browse our fleet by category, size, or budget and pick what suits your trip.',
    },
    {
      icon: 'calendar',
      title: 'Book your dates',
      description:
        'Select pickup and return dates, add extras like GPS or a child seat.',
    },
    {
      icon: 'key',
      title: 'Pick up & drive',
      description:
        'Collect the keys at any of our 8 island-wide locations and hit the road.',
    },
  ];

  formatPrice(price: number): string {
    return `LKR ${price.toLocaleString('en-LK')}`;
  }
}
