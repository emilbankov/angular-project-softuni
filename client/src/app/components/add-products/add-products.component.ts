import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  constructor(private apiService: ApiService) {}

  addIphone(e: Event, name: string, imageUrl: string, color: string, batteryLife: string, description: string, display: string, storage: string, price: string) {
    e.preventDefault();
    this.apiService.addIphone(name, imageUrl, color, batteryLife, description, display, storage, price).subscribe();
  }
}
