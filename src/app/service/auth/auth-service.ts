import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RegisterRequestDto } from '../../dto/registerRequestDto';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  httpClient = inject(HttpClient);

  private baseUrl = environment.BASEURL;

  private authUrl = `${this.baseUrl}/auth/register`;

  public register(registerRequestDto:RegisterRequestDto):Observable<any>{
    return this.httpClient.post(this.authUrl,registerRequestDto);
  }
}
