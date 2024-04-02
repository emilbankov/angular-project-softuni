import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iMac } from './types/imac';
import iPad from './types/ipad';
import { iPhone } from './types/iphone';
import { get, post } from './components/utils/request';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:3030/data';

  constructor(private http: HttpClient) { }

  // iPhone Services
  getAllIphones() {
    return get(`${this.baseUrl}/iphones`) as Promise<iPhone[]>;
  }

  getIphone(id: string) {
    return get(`${this.baseUrl}/iphones/${id}`) as Promise<iPhone>;
  }

  addIphone(name: string, imageUrl: string, color: string, batteryLife: string, description: string, display: string, storage: string, price: string) {
    return post(`${this.baseUrl}/iphones`, { name, imageUrl, color, batteryLife, description, display, storage, price }) as Promise<iPhone>;
  }

  // iPad Services
  getAllIpads() {
    return get(`${this.baseUrl}/ipads`) as Promise<iPad[]>;
  }

  getIpad(id: string) {
    return get(`${this.baseUrl}/ipads/${id}`) as Promise<iPad>;
  }

  addIpad(name: string, imageUrl: string, color: string, batteryLife: string, description: string, display: string, storage: string, price: string) {
    return post(`${this.baseUrl}/ipads`, { name, imageUrl, color, batteryLife, description, display, storage, price }) as Promise<iPad>;
  }

  // iMac Services
  getAllImacs() {
    return get(`${this.baseUrl}/imacs`) as Promise<iMac[]>;
  }

  getImac(id: string) {
    return get(`${this.baseUrl}/imacs/${id}`) as Promise<iMac>;
  }

  addImac(name: string, imageUrl: string, cpu: string, gpu: string, description: string, display: string, storage: string, price: string) {
    return post(`${this.baseUrl}/imacs`, { name, imageUrl, cpu, gpu, description, display, storage, price }) as Promise<iMac>;
  }
}
