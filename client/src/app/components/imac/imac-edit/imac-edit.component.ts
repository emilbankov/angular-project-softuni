import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-imac-edit',
  templateUrl: './imac-edit.component.html',
  styleUrls: ['./imac-edit.component.css']
})
export class iMacEditComponent implements OnInit {
  @ViewChild('editImacForm') editImacForm!: NgForm;

  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      const id = data['imacId'];
      this.apiService.getImac(id).subscribe((imac) => {
        const { name, imageUrl, cpu, gpu, description, display, storage, price } = imac;
        
        if (this.editImacForm) {
          this.editImacForm.setValue({ name, imageUrl, cpu, gpu, description, display, storage, price })
        }
      })
    })
  }

  editImac(editImacForm: NgForm) {
    if (editImacForm.invalid) {
      return;
    }

    this.activatedRoute.params.subscribe((data) => {
      const id = data['imacId']
      const { name, imageUrl, cpu, gpu, description, display, storage, price } = editImacForm.value;
      this.apiService.editImac(id, name, imageUrl, cpu, gpu, description, display, storage, price).subscribe(() => {
        this.router.navigate([`/imac-catalog/imac-details/${id}`])
      })
    })

  }
}
