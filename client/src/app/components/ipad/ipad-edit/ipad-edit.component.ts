import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-ipad-edit',
  templateUrl: './ipad-edit.component.html',
  styleUrls: ['./ipad-edit.component.css']
})
export class iPadEditComponent implements OnInit {
  @ViewChild('editIpadForm') editIpadForm!: NgForm;

  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      const id = data['ipadId'];
      this.apiService.getIpad(id).subscribe((ipad) => {
        const { name, imageUrl, color, batteryLife, description, display, storage, price } = ipad;
        
        if (this.editIpadForm) {
          this.editIpadForm.setValue({ name, imageUrl, color, batteryLife, description, display, storage, price })
        }
      })
    })
  }

  editIpad(editIpadForm: NgForm) {
    if (editIpadForm.invalid) {
      return;
    }

    this.activatedRoute.params.subscribe((data) => {
      const id = data['ipadId']
      const { name, imageUrl, color, batteryLife, description, display, storage, price } = editIpadForm.value;
      this.apiService.editIpad(id, name, imageUrl, color, batteryLife, description, display, storage, price).subscribe(() => {
        this.router.navigate([`/ipad-catalog/ipad-details/${id}`])
      })
    })
  }
}