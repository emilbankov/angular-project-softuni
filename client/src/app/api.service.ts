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

  // iPhone Services
  getAllIphones() {
    return this.http.get<iPhone[]>(`${this.baseUrl}/iphones`);
  }

  getIphone(id: string) {
    return this.http.get<iPhone>(`${this.baseUrl}/iphones/${id}`);
  }

  addIphone(name: string, imageUrl: string, color: string, batteryLife: string, description: string, display: string, storage: string, price: string) {
    return this.http.post<iPhone>(`${this.baseUrl}/iphones`, { name, imageUrl, color, batteryLife, description, display, storage, price })
  }

  // iPad Services
  getAllIpads() {
    return this.http.get<iPad[]>(`${this.baseUrl}/ipads`);
  }

  getIpad(id: string) {
    return this.http.get<iPad>(`${this.baseUrl}/ipads/${id}`);
  }

  addIpad(name: string, imageUrl: string, color: string, batteryLife: string, description: string, display: string, storage: string, price: string) {
    return this.http.post<iPad>(`${this.baseUrl}/ipads`, { name, imageUrl, color, batteryLife, description, display, storage, price })
  }

  // iMac Services
  getAllImacs() {
    return this.http.get<iMac[]>(`${this.baseUrl}/imacs`);
  }

  getImac(id: string) {
    return this.http.get<iMac>(`${this.baseUrl}/imacs/${id}`);
  }

  addImac(name: string, imageUrl: string, cpu: string, gpu: string, description: string, display: string, storage: string, price: string) {
    return this.http.post<iMac>(`${this.baseUrl}/imacs`, { name, imageUrl, cpu, gpu, description, display, storage, price })
  }
}
