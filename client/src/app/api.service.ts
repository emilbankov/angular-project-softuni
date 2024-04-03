import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iMac } from './types/imac';
import { iPhone } from './types/iphone';
import iPad from './types/ipad';
import { Accessory } from './types/accessory';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:3030/data';

  constructor(private http: HttpClient) { }

  // iPhone Services
  getAllIphones() {
    return this.http.get<iPhone[]>(`${this.baseUrl}/iphones`);
  }

  getIphone(id: string) {
    return this.http.get<iPhone>(`${this.baseUrl}/iphones/${id}`);
  }

  addIphone(name: string, imageUrl: string, color: string, batteryLife: number, description: string, display: number, storage: number, price: string) {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      throw new Error('Access token not found');
    }

    const headers = new HttpHeaders({
      'X-Authorization': accessToken
    });

    return this.http.post<iPhone>(`${this.baseUrl}/iphones`, { name, imageUrl, color, batteryLife, description, display, storage, price }, { headers });
  }

  editIphone(iphoneId: string, name: string, imageUrl: string, color: string, batteryLife: number, description: string, display: number, storage: number, price: string) {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      throw new Error('Access token not found');
    }

    const headers = new HttpHeaders({
      'X-Authorization': accessToken
    });

    return this.http.put<iPhone>(`${this.baseUrl}/iphones/${iphoneId}`, { name, imageUrl, color, batteryLife, description, display, storage, price }, { headers });
  }

  deleteIphone(iphoneId: string) {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      throw new Error('Access token not found');
    }

    const headers = new HttpHeaders({
      'X-Authorization': accessToken
    });

    return this.http.delete<iPhone>(`${this.baseUrl}/iphones/${iphoneId}`, { headers });
  }

  // iPad Services
  getAllIpads() {
    return this.http.get<iPad[]>(`${this.baseUrl}/ipads`);
  }

  getIpad(id: string) {
    return this.http.get<iPad>(`${this.baseUrl}/ipads/${id}`);
  }

  addIpad(name: string, imageUrl: string, color: string, batteryLife: number, description: string, display: number, storage: number, price: string) {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      throw new Error('Access token not found');
    }

    const headers = new HttpHeaders({
      'X-Authorization': accessToken
    });

    return this.http.post<iPad>(`${this.baseUrl}/ipads`, { name, imageUrl, color, batteryLife, description, display, storage, price }, { headers });
  }

  editIpad(ipadId: string, name: string, imageUrl: string, color: string, batteryLife: number, description: string, display: number, storage: number, price: string) {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      throw new Error('Access token not found');
    }

    const headers = new HttpHeaders({
      'X-Authorization': accessToken
    });

    return this.http.put<iPad>(`${this.baseUrl}/ipads/${ipadId}`, { name, imageUrl, color, batteryLife, description, display, storage, price }, { headers });
  }

  deleteIpad(ipadId: string) {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      throw new Error('Access token not found');
    }

    const headers = new HttpHeaders({
      'X-Authorization': accessToken
    });

    return this.http.delete<iPad>(`${this.baseUrl}/ipads/${ipadId}`, { headers });
  }

  // iMac Services
  getAllImacs() {
    return this.http.get<iMac[]>(`${this.baseUrl}/imacs`);
  }

  getImac(id: string) {
    return this.http.get<iMac>(`${this.baseUrl}/imacs/${id}`);
  }

  addImac(name: string, imageUrl: string, cpu: number, gpu: number, description: string, display: number, storage: number, price: string) {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      throw new Error('Access token not found');
    }

    const headers = new HttpHeaders({
      'X-Authorization': accessToken
    });

    return this.http.post<iMac>(`${this.baseUrl}/imacs`, { name, imageUrl, cpu, gpu, description, display, storage, price }, { headers });
  }

  editImac(imacId: string, name: string, imageUrl: string, cpu: number, gpu: number, description: string, display: number, storage: number, price: string) {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      throw new Error('Access token not found');
    }

    const headers = new HttpHeaders({
      'X-Authorization': accessToken
    });

    return this.http.put<iMac>(`${this.baseUrl}/imacs/${imacId}`, { name, imageUrl, cpu, gpu, description, display, storage, price }, { headers });
  }

  deleteImac(imacId: string) {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      throw new Error('Access token not found');
    }

    const headers = new HttpHeaders({
      'X-Authorization': accessToken
    });

    return this.http.delete<iMac>(`${this.baseUrl}/imacs/${imacId}`, { headers });
  }

  // Accessory services
  addAccessory(name: string, imageUrl: string, type: string) {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      throw new Error('Access token not found');
    }

    const headers = new HttpHeaders({
      'X-Authorization': accessToken
    });

    return this.http.post<Accessory>(`${this.baseUrl}/accessories`, { name, imageUrl, type }, { headers });
  }

  getAllAccessories() {
    return this.http.get<Accessory[]>(`${this.baseUrl}/accessories`);
  }
}
