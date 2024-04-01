import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-accessories',
  templateUrl: './add-accessories.component.html',
  styleUrls: ['./add-accessories.component.css']
})
export class AddAccessoriesComponent {
  addIphone(form: NgForm) {
    if (form.invalid) {
      return;
    }
  }
}
