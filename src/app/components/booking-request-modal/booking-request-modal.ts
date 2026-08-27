import {
  Component,
  Input,
  Output,
  EventEmitter,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingService } from '../../service/booking.service';
import { VehicleListItem, VehicleSearchParams } from '../../dto/vehicle.model';
import { PublicBookingResponse, PublicBookingRequest } from '../../dto/booking-request.model';

@Component({
  selector: 'app-booking-request-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking-request-modal.html',
  styleUrl: './booking-request-modal.scss',
})
export class BookingRequestModalComponent {
  @Input() isOpen = false;
  @Input() vehicle!: VehicleListItem;
  @Input() searchParams!: VehicleSearchParams;
  @Output() closed = new EventEmitter<void>();

  private readonly bookingService = inject(BookingService);

  // Form fields
  customerName = '';
  contactNumber = '';

  // UI state
  submitting = false;
  errorMsg: string | null = null;
  successData: PublicBookingResponse | null = null;

  // Validation flags
  nameError = false;
  contactError = false;

  get pickupDateFormatted(): string {
    return this.searchParams?.pickupDate
      ? new Date(this.searchParams.pickupDate).toLocaleDateString('en-GB', {
          day: '2-digit', month: 'short', year: 'numeric',
        })
      : '';
  }

  get returnDateFormatted(): string {
    return this.searchParams?.returnDate
      ? new Date(this.searchParams.returnDate).toLocaleDateString('en-GB', {
          day: '2-digit', month: 'short', year: 'numeric',
        })
      : '';
  }

  get estimatedDays(): number {
    if (!this.searchParams?.pickupDate || !this.searchParams?.returnDate) return 0;
    const pickup = new Date(this.searchParams.pickupDate);
    const ret    = new Date(this.searchParams.returnDate);
    return Math.max(1, Math.ceil((ret.getTime() - pickup.getTime()) / 86_400_000));
  }

  get estimatedTotal(): number {
    return this.estimatedDays * (this.vehicle?.dailyRate ?? 0);
  }

  formatPrice(price: number): string {
    return `LKR ${price.toLocaleString('en-LK')}`;
  }

  validate(): boolean {
    this.nameError    = !this.customerName.trim();
    this.contactError = !this.contactNumber.trim() ||
                        !/^[\d\s\+\-]{7,15}$/.test(this.contactNumber.trim());
    return !this.nameError && !this.contactError;
  }

  onSave(): void {
    this.errorMsg = null;
    if (!this.validate()) return;

    const payload: PublicBookingRequest = {
      vehicleId:       this.vehicle.id,
      customerName:    this.customerName.trim(),
      contactNumber:   this.contactNumber.trim(),
      pickupLocation:  this.searchParams.pickupLocation,
      pickupDate:      this.searchParams.pickupDate,
      returnDate:      this.searchParams.returnDate,
    };

    this.submitting = true;
    this.bookingService.createVisitorBookingRequest(payload).subscribe({
      next: (res) => {
        this.successData = res;
        this.submitting  = false;
      },
      error: (err) => {
        this.errorMsg  = err?.error?.message ?? 'Something went wrong. Please try again.';
        this.submitting = false;
      },
    });
  }

  close(): void {
    this.reset();
    this.closed.emit();
  }

  private reset(): void {
    this.customerName  = '';
    this.contactNumber = '';
    this.errorMsg      = null;
    this.successData   = null;
    this.nameError     = false;
    this.contactError  = false;
    this.submitting    = false;
  }

  onOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('bm-overlay')) {
      this.close();
    }
  }
}
