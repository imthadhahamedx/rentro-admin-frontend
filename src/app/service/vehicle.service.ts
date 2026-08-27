import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse, PaginatedResponse, VehicleListItem } from '../dto/vehicle.model';


@Injectable({ providedIn: 'root' })
export class VehicleService {
  private readonly http = inject(HttpClient);
  // Adjust base URL to match your Spring Boot server
  private readonly BASE_URL = 'http://localhost:8080/api/v1/vehicles';

  /**
   * Public / visitor endpoint — no auth token required.
   * GET /vehicles/visitors/search?searchText=&page=0&size=10
   */
  searchAvailableVehicles(
    searchText: string = '',
    categoryId?: string,
    page: number = 0,
    size: number = 10
  ): Observable<PaginatedResponse<VehicleListItem>> {
    let params = new HttpParams()
      .set('searchText', searchText)
      .set('page', page)
      .set('size', size);

    if (categoryId) {
      params = params.set('categoryId', categoryId);
    }

    return this.http
      .get<ApiResponse<PaginatedResponse<VehicleListItem>>>(
        `${this.BASE_URL}/public/search`,
        { params }
      )
      .pipe(map((res) => res.data));
  }
}
