import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  @ViewChild('iphoneCatalogSection') iphoneCatalogSection!: ElementRef;
  constructor(private apiService: ApiService, private router: Router) { }


  addIphone = async (form: NgForm) => {
    if (form.invalid) {
      return;
    }
    try {
      const { name, imageUrl, color, batteryLife, description, display, storage, price } = form.value;
      await this.apiService.addIphone(name, imageUrl, color, batteryLife, description, display, storage, price)
      this.router.navigate(['/iphone-catalog']);
    } catch (error) {
      console.error(error);
    }
  }


  addIpad(form: NgForm) {
    if (form.invalid) {
      return;
    }
  }

  addImac(form: NgForm) {
    if (form.invalid) {
      return;
    }
  }

  // addIphone(e: Event, name: string, imageUrl: string, color: string, batteryLife: string, description: string, display: string, storage: string, price: string) {
  //   e.preventDefault();
  //   this.apiService.addIphone(name, imageUrl, color, batteryLife, description, display, storage, price).subscribe();
  // }

  // addIpad(e: Event, name: string, imageUrl: string, color: string, batteryLife: string, description: string, display: string, storage: string, price: string) {
  //   e.preventDefault();
  //   this.apiService.addIpad(name, imageUrl, color, batteryLife, description, display, storage, price).subscribe();
  // }

  // addImac(e: Event, name: string, imageUrl: string, cpu: string, gpu: string, description: string, display: string, storage: string, price: string) {
  //   e.preventDefault();
  //   this.apiService.addImac(name, imageUrl, cpu, gpu, description, display, storage, price).subscribe();
  // }
}
