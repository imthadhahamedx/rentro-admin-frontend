import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleService } from '../../service/vehicle.service';
import { BookingRequestModalComponent } from '../booking-request-modal/booking-request-modal';
import { VehicleListItem, VehicleSearchParams } from '../../dto/vehicle.model';

@Component({
  selector: 'app-vehicle-search-modal',
  standalone: true,
  imports: [CommonModule, BookingRequestModalComponent],
  templateUrl: './vehicle-search-modal.html',
  styleUrl: './vehicle-search-modal.scss',
})
export class VehicleSearchModalComponent implements OnChanges {
  /** Pass true to open the modal and trigger the search */
  @Input() isOpen = false;
  /** Search params collected from the hero form */
  @Input() searchParams!: VehicleSearchParams;
  /** Emitted when the modal requests to close */
  @Output() closed = new EventEmitter<void>();

  private readonly vehicleService = inject(VehicleService);

  vehicles: VehicleListItem[] = [];
  loading = false;
  error: string | null = null;
  totalCount = 0;

  // Booking modal state
  bookingModalOpen = false;
  selectedVehicle: VehicleListItem | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen'] && this.isOpen) {
      this.fetchVehicles();
    }
  }

  fetchVehicles(): void {
    this.loading = true;
    this.error = null;
    this.vehicles = [];

    this.vehicleService
      .searchAvailableVehicles(
        this.searchParams?.searchText ?? '',
        this.searchParams?.categoryId,
        0,
        12
      )
      .subscribe({
        next: (data) => {
          this.vehicles = data.dataList;
          this.totalCount = data.count;
          this.loading = false;
        },
        error: () => {
          this.error = 'Failed to load vehicles. Please try again.';
          this.loading = false;
        },
      });
  }

  openBookingModal(vehicle: VehicleListItem): void {
    this.selectedVehicle = vehicle;
    this.bookingModalOpen = true;
  }

  onBookingModalClosed(): void {
    this.bookingModalOpen = false;
    this.selectedVehicle = null;
  }

  close(): void {
    this.closed.emit();
  }

  formatPrice(price: number): string {
    return `LKR ${price.toLocaleString('en-LK')}`;
  }

  onOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.close();
    }
  }
}
