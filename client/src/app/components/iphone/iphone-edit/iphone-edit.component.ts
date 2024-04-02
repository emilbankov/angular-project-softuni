import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-iphone-edit',
  templateUrl: './iphone-edit.component.html',
  styleUrls: ['./iphone-edit.component.css']
})
export class iPhoneEditComponent implements OnInit {
  @ViewChild('editIphoneForm') editIphoneForm!: NgForm;

  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      const id = data['iphoneId'];
      this.apiService.getIphone(id).subscribe((iphone) => {
        const { name, imageUrl, color, batteryLife, description, display, storage, price } = iphone;
        
        if (this.editIphoneForm) {
          this.editIphoneForm.setValue({ name, imageUrl, color, batteryLife, description, display, storage, price })
        }
      })
    })
  }

  editIphone(editIphoneForm: NgForm) {
    if (editIphoneForm.invalid) {
      return;
    }

    this.activatedRoute.params.subscribe((data) => {
      const id = data['iphoneId']
      const { name, imageUrl, color, batteryLife, description, display, storage, price } = editIphoneForm.value;
      this.apiService.editIphone(id, name, imageUrl, color, batteryLife, description, display, storage, price).subscribe(() => {
        this.router.navigate([`/iphone-catalog/iphone-details/${id}`])
      })
    })
  }
}