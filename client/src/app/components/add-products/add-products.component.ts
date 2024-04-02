import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  constructor(private apiService: ApiService, private router: Router ) {}

  addIphone(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { name, imageUrl, color, batteryLife, description, display, storage, price } = form.value;
    this.apiService.addIphone(name, imageUrl, color, batteryLife, description, display, storage, price).subscribe(() => {
      this.router.navigate(['/iphone-catalog'])
    })
  }

  addIpad(ipadForm: NgForm) {
    if (ipadForm.invalid) {
      return;
    }

    const { name, imageUrl, color, batteryLife, description, display, storage, price } = ipadForm.value;
    this.apiService.addIpad(name, imageUrl, color, batteryLife, description, display, storage, price).subscribe(() => {
      this.router.navigate(['/ipad-catalog'])
    })
  }

  addImac(imacForm: NgForm) {
    if (imacForm.invalid) {
      return;
    }

    const { name, imageUrl, cpu, gpu, description, display, storage, price } = imacForm.value;
    this.apiService.addImac(name, imageUrl, cpu, gpu, description, display, storage, price).subscribe(() => {
      this.router.navigate(['/imac-catalog'])
    })
  }
}
