import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iMac } from './types/imac';
import { iPad } from './types/ipad';
import { iPhone } from './types/iphone';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:3030/data';

  constructor(private http: HttpClient) {}

  getIphones() {
    return this.http.get<iPhone[]>(`${this.baseUrl}/iphones`);
  }

  getIpads() {
    return this.http.get<iPad[]>(`${this.baseUrl}/ipads`);
  }

  getImacs() {
    return this.http.get<iMac[]>(`${this.baseUrl}/imacs`);
  }
}
