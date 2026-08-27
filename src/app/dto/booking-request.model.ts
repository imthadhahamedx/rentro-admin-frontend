export interface PublicBookingRequest {
  vehicleId: string;
  customerName: string;
  contactNumber: string;
  pickupLocation: string;
  pickupDate: string;   // ISO date string yyyy-MM-dd
  returnDate: string;   // ISO date string yyyy-MM-dd
}

export interface PublicBookingResponse {
  bookingRef: string;
  vehicleName: string;
  pickupDate: string;
  returnDate: string;
  estimatedAmount: number;
  status: string;
}
