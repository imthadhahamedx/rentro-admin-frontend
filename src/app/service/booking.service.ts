import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse } from '../dto/vehicle.model';
import { PublicBookingRequest, PublicBookingResponse } from '../dto/booking-request.model';

@Injectable({ providedIn: 'root' })
export class BookingService {
  private readonly http = inject(HttpClient);
  private readonly BASE_URL = 'http://localhost:8080/api/v1/booking';

  /**
   * Public visitor booking request.
   * POST /booking/public-requests
   */
  createVisitorBookingRequest(
    payload: PublicBookingRequest
  ): Observable<PublicBookingResponse> {
    return this.http
      .post<ApiResponse<PublicBookingResponse>>(
        `${this.BASE_URL}/public-requests`,
        payload
      )
      .pipe(map((res) => res.data));
  }
}
