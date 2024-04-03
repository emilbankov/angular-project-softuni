import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-accessories',
  templateUrl: './add-accessories.component.html',
  styleUrls: ['./add-accessories.component.css']
})
export class AddAccessoriesComponent {
  constructor(private apiService: ApiService, private router: Router) {}

  addAccessory(addAccessoryForm: NgForm) {
    if (addAccessoryForm.invalid) {
      return;
    }

    const { name, imageUrl, type } = addAccessoryForm.value;
    this.apiService.addAccessory(name, imageUrl, type).subscribe(() => {
      this.router.navigate(['/'])
    })
  }
}
