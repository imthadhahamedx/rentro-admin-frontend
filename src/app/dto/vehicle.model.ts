export interface VehicleImage {
  id: string;
  resourceUrl: string;
  isPrimary: boolean;
}

export interface VehicleListItem {
  id: string;
  name: string;
  regNo: string;
  categoryName: string;
  categoryType: string;   // e.g. HATCHBACK, SUV, ECONOMY, MPV
  transmission: string;   // AUTOMATIC | MANUAL
  seats: number;
  dailyRate: number;
  status: string;
  badge?: string;         // e.g. "Most Popular" – derived client-side if needed
  primaryImageUrl?: string;
}

export interface PaginatedResponse<T> {
  count: number;
  dataList: T[];
}

export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}

export interface VehicleSearchParams {
  pickupLocation: string;
  pickupDate: string;
  returnDate: string;
  searchText?: string;
  categoryId?: string;
  page?: number;
  size?: number;
}
